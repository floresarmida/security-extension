import express from 'express'
import path from 'path'

/*
Serves raw script content
These should already have the appropriate metadata.
*/
const Scripts = () => {
  const scriptsPath = path.join(__dirname, '../data/scripts')
  console.log(scriptsPath)
  const router = new express.Router()
  router.use('/scripts/official/', express.static(scriptsPath))
  return router
}
// Example: http://localhost:3000/api/v1/scripts/official/get-inline-values.js

export default Scripts
