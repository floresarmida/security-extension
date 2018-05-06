const universal = {
  env: process.env.NODE_ENV,
  prefix: 'api',
  version: 'v1'
}

const development = {
  protocol: 'http',
  host: 'localhost:3000',
  port: 3000
}

const production = {
  protocol: 'https',
  host: 'example.org',
  port: 443,
  redirect: 80
}

// Babel won't process ES6 exports
const config = Object.assign({}, universal,
  process.env.NODE_ENV === 'production' ? production : development
)
module.exports = config
