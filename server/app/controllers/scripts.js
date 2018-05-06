import express from 'express'
// app.use('/public', express.static(`${__dirname}/public`))

const Scripts = () => {
  const router = new express.Router()
  // router.get('/scripts/official/', express.static(`${__dirname}/data/scripts`))
  router.get('/scripts/official/', (req, res) => res.json({ static: true }))
  return router
}

export default Scripts
