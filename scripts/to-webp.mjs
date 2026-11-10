import { readdir, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const IMAGE_EXTENSIONS = new Set([".png", ".jpg", ".jpeg"]);
const WEBP_QUALITY = 80;

function printUsage() {
  console.error("Укажите папку с изображениями.");
  console.error(
    "Пример: npm run webp -- public/images/products/playstation5/instructions",
  );
}

const folderArg = process.argv[2];

if (!folderArg || folderArg.startsWith("-")) {
  printUsage();
  process.exit(1);
}

if (process.argv.length > 3) {
  console.error("Нужен один аргумент — путь к папке.");
  process.exit(1);
}

const folder = path.resolve(process.cwd(), folderArg);

let folderStat;
try {
  folderStat = await stat(folder);
} catch {
  console.error(`Папка не найдена: ${folder}`);
  process.exit(1);
}

if (!folderStat.isDirectory()) {
  console.error(`Это не папка: ${folder}`);
  process.exit(1);
}

async function collectImages(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await collectImages(fullPath)));
      continue;
    }

    if (!entry.isFile()) {
      continue;
    }

    if (IMAGE_EXTENSIONS.has(path.extname(entry.name).toLowerCase())) {
      files.push(fullPath);
    }
  }

  return files;
}

const files = (await collectImages(folder)).sort((a, b) => a.localeCompare(b));

if (files.length === 0) {
  console.log("В папке нет файлов PNG или JPG.");
  process.exit(0);
}

let converted = 0;
let failed = 0;

for (const filePath of files) {
  const outputPath = filePath.replace(/\.(png|jpe?g)$/i, ".webp");
  const relativeInput = path.relative(folder, filePath);
  const relativeOutput = path.relative(folder, outputPath);

  try {
    await sharp(filePath).webp({ quality: WEBP_QUALITY }).toFile(outputPath);
    converted += 1;
    console.log(`${relativeInput} -> ${relativeOutput}`);
  } catch (error) {
    failed += 1;
    const message = error instanceof Error ? error.message : String(error);
    console.error(`Не удалось преобразовать ${relativeInput}: ${message}`);
  }
}

console.log(
  `Готово: ${converted} из ${files.length}. Качество ${WEBP_QUALITY}. Исходные файлы сохранены.`,
);

if (failed > 0) {
  process.exit(1);
}
