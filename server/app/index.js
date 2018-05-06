import express from 'express'
import { env, host, redirect, port, prefix, version } from './config'
import initialize from './express'
import routes from './routes'

const app = express()
initialize(app)
routes(app)

if (env === 'production') {
  const http = require('http')
  const https = require('https')
  const path = require('path')
  const fs = require('fs')

  const key = fs.readFileSync(
    path.resolve(process.cwd(), 'config/priv-key.ppk'),
    'utf-8'
  )
  const cert = fs.readFileSync(
    path.resolve(process.cwd(), 'config/pub-cert.ppk'),
    'utf-8'
  )

  http
    .createServer((req, res) => {
      let redirectURL = `https://${host}:${port}${req.url}`
      res.writeHead(301, {'Location': redirectURL})
      res.end()
    })
    .listen(redirect)

  https
    .createServer({ key, cert }, app)
    .listen(port)
} else if (env === 'development') {
  app.listen(port)
}

console.log(`
<========================>
Starting ${env} Server ...
Host:   ${host}
Port:   ${port}
<========================>
`)

export default app
