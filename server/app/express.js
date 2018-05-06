import cors from 'cors'
import bodyParser from 'body-parser'
import methodOverride from 'method-override'
import logger from 'morgan'
import helmet from 'helmet'

export default (app) => {
  // Helmet helps you secure your Express apps by setting various HTTP headers
  // https://github.com/helmetjs/helmet
  app.use(helmet())

  // Enable CORS with various options
  // https://github.com/expressjs/cors
  app.use(cors())
  app.use(logger('dev'))

  // Parse incoming request bodies
  // https://github.com/expressjs/body-parser
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))

  // Lets you use HTTP verbs such as PUT or DELETE
  // https://github.com/expressjs/method-override
  app.use(methodOverride())

  // Mount public routes
  // app.use('/public', express.static(`${__dirname}/public`))
}
