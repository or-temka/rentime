const { createServer } = require('http')
const next = require('next')

const dev = process.env.NODE_ENV === 'development'
const PORT = process.env.PORT || 3000

const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer((req, res) => {
    handle(req, res)
  }).listen(PORT, (err) => {
    if (err) throw err
    console.log('🚀 Server started')
  })
})
