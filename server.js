const { createServer } = require('http')
const next = require('next')

const dev = process.env.NODE_ENV === 'development'
const PORT = Number(process.env.PORT || process.env.NEXT_SERVER_PORT || 3000)
// In production bind to localhost only — nginx/caddy proxies from 443/80.
// Override with HOST=0.0.0.0 if you run without a reverse proxy (not recommended).
const HOST = process.env.HOST ?? (dev ? '0.0.0.0' : '127.0.0.1')

const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer((req, res) => {
    handle(req, res)
  }).listen(PORT, HOST, (err) => {
    if (err) throw err
    console.log(`🚀 Server started on http://${HOST}:${PORT}`)
  })
})
