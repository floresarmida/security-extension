import { Router } from 'express'
import { prefix, version } from './config'

import controllers from './controllers'
import middleware from './middleware'

export default (app) => {
  const routes = new Router()
  // NOTE: Example
  routes.get('/', (req, res) => res.json({ index: true }))
  controllers.forEach(control => routes.use(control()))
  middleware.forEach(ware => routes.use(ware))

  const apiRoute = `/${prefix}/${version}`
  app.use(apiRoute, routes)
}
