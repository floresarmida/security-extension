/*
CORE SCRIPTS
General built-in exploits, the default features of the app
Can perform exploits, static analysis, etc
*/
export default {
  'find-comments': require('./find-comments'),
  'get-inline-values': require('./get-inline-values'),
  'get-bound-functions': require('./get-bound-functions'),
  'get-global-state': require('./get-global-state'),
  'reveal-hidden-elements': require('./reveal-hidden-elements')
}
