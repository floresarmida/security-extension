/*
DOM - Used to interact with raw pages
Serves as the interface between the popup DOM and content DOM

Usage:
  type: 'script' | 'import'
  body: the data (script body, import URLs, etc)

*/

//  Site contains config options, we're executing from the current tab
const content = { active: true, currentWindow: true }

/*
EVALUATE: Run a script
*/
export function EVALUATE (script) {
  try {
    chrome.tabs.query(content, (tabs) => {
      const command = { type: 'script', body: script }
      chrome.tabs.sendMessage(tabs[0].id, command, (response) => {
        console.warn('Script | Response:', `\n${script}\n`, response)
      })
    })
  } catch (err) {
    console.error('Script | Failure:', `\n${script}\n`, err)
  }
}

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
