import fs from 'fs'
import path from 'path'

type ImageSize = {
  width: number
  height: number
}

function parseImageSize(buffer: Buffer): ImageSize | null {
  if (buffer.length < 24) return null

  if (buffer[0] === 0x89 && buffer.toString('ascii', 1, 4) === 'PNG') {
    return {
      width: buffer.readUInt32BE(16),
      height: buffer.readUInt32BE(20),
    }
  }

  if (buffer.toString('ascii', 0, 3) === 'GIF') {
    return {
      width: buffer.readUInt16LE(6),
      height: buffer.readUInt16LE(8),
    }
  }

  if (buffer[0] === 0xff && buffer[1] === 0xd8) {
    return parseJpegSize(buffer)
  }

  if (
    buffer.toString('ascii', 0, 4) === 'RIFF' &&
    buffer.toString('ascii', 8, 12) === 'WEBP'
  ) {
    return parseWebpSize(buffer)
  }

  return null
}

function parseJpegSize(buffer: Buffer): ImageSize | null {
  let offset = 2

  while (offset < buffer.length) {
    if (buffer[offset] !== 0xff) return null
    while (buffer[offset] === 0xff) offset += 1

    const marker = buffer[offset]
    offset += 1

    if (marker === 0xd9 || marker === 0xda) return null
    if ((marker >= 0xd0 && marker <= 0xd7) || marker === 0x01) continue
    if (offset + 1 >= buffer.length) return null

    const length = buffer.readUInt16BE(offset)
    const isStartOfFrame =
      marker >= 0xc0 &&
      marker <= 0xcf &&
      marker !== 0xc4 &&
      marker !== 0xc8 &&
      marker !== 0xcc

    if (isStartOfFrame) {
      if (offset + 6 >= buffer.length) return null
      return {
        height: buffer.readUInt16BE(offset + 3),
        width: buffer.readUInt16BE(offset + 5),
      }
    }

    offset += length
  }

  return null
}

function parseWebpSize(buffer: Buffer): ImageSize | null {
  const chunk = buffer.toString('ascii', 12, 16)

  if (chunk === 'VP8X' && buffer.length >= 30) {
    return {
      width: 1 + buffer.readUIntLE(24, 3),
      height: 1 + buffer.readUIntLE(27, 3),
    }
  }

  if (chunk === 'VP8 ' && buffer.length >= 30) {
    return {
      width: buffer.readUInt16LE(26) & 0x3fff,
      height: buffer.readUInt16LE(28) & 0x3fff,
    }
  }

  if (chunk === 'VP8L' && buffer.length >= 25 && buffer[20] === 0x2f) {
    const bits = buffer.readUInt32LE(21)
    return {
      width: (bits & 0x3fff) + 1,
      height: ((bits >> 14) & 0x3fff) + 1,
    }
  }

  return null
}

/** Pixel size of a file in /public. Missing or remote sources return null. */
export function readPublicImageSize(src: string): ImageSize | null {
  if (!src.startsWith('/') || src.startsWith('//')) return null

  let pathname: string
  try {
    pathname = decodeURIComponent(src.split(/[?#]/, 1)[0])
  } catch {
    return null
  }

  const publicDir = path.resolve(process.cwd(), 'public')
  const filePath = path.resolve(publicDir, pathname.replace(/^\/+/, ''))
  const relative = path.relative(publicDir, filePath)
  if (relative.startsWith('..') || path.isAbsolute(relative)) return null

  try {
    return parseImageSize(fs.readFileSync(filePath))
  } catch {
    return null
  }
}
