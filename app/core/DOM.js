/*
DOM - Used to interact with raw pages
Serves as the interface between the popup DOM and content DOM

Usage:
  type: 'script' | 'import'
  body: the data (script body, import URLs, etc)

*/

/*
EVALUATE: Run a script
NOTE: This may be wrapped in string literals, so don't use `these`
*/
export const RAW_DOM_INJECTION = `
  function RAW_DOM_INJECTION (script) {
  // console.warn('RAW_DOM_INJECTION', typeof Promise)
  return new Promise((resolve, reject) => {
    const TEST = {
      id: 'ccc',
      title: 'Test C',
      body: 'setTimeout(() => RETURN(3), 1000);'
    }
    const { id, title, body } = TEST
    console.warn('RAW_DOM_INJECTION', typeof Promise)
    try {
      /* EXECUTION ENVIRONMENT: RAW DOM -> CONTENT SCRIPT */
      window.addEventListener(id, (e) => {
        /* EXECUTION ENVIRONMENT: CONTENT SCRIPT -> BACKGROUND (EXTENSION) */
        const { detail } = e
        resolve({ success: true, response: detail })
      }, { once: true })
      /* EXECUTION ENVIRONMENT: CONTENT SCRIPT -> RAW DOM */
      const element = document.createElement('script')
      element.textContent = '(async function () {' +
        'const execution = () => new Promise((RETURN, ERROR) => { ' + body + ' });' +
        'let response = await execution();' +
        'var event = document.createEvent("CustomEvent");' +
        'event.initCustomEvent("' + id + '", true, true, response);' +
        'window.dispatchEvent(event);' +
      '})();';
      /* EXECUTION ENVIRONMENT: CONTENT SCRIPT -> RAW DOM */
      (document.head || document.documentElement).appendChild(element)
      element.parentNode.removeChild(element)
    } catch (ERROR) {
      console.error(ERROR)
      resolve({ success: false, response: { ERROR } })
    }
  })
}
`

/*
//  How to do this with executeScript in case we need to:
export const executeScript = (id, body) => {
  return function (dispatch) {
    // const test = 'return document.body.innerHTML;'
    try {
      chrome.tabs.executeScript(
        { code: `(function(params) { ${body} })();` },
        (output) => {
          dispatch({ type: EXECUTE_SCRIPT, id, output: output[0] || output })
        }
      )
    } catch (err) {
      console.error(err)
    }
  }
}
*/
