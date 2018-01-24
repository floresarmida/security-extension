// // now listen for the message
// window.addEventListener('MyCustomEvent', e => {
//   const check = e.detail.passback;
//   console.log('RESPONSE', check)
//   // [do what you need to here].
// })
// // inject code into "the other side" to talk back to this side;
// const scr = document.createElement('script');
// const wrappedScript = `(function () { ${'return 9001;'} })();`
// // appending text to a function to convert it's src to string only works in Chrome
// scr.textContent = `(${
//   () => {
//     const check = eval(wrappedScript)
//     const event = document.createEvent('CustomEvent');
//     event.initCustomEvent('MyCustomEvent', true, true, {'passback': check})
//     window.dispatchEvent(event)
//   }
// })();`;
// (document.head || document.documentElement).appendChild(scr)
// // and then hide the evidence as much as possible.
// scr.parentNode.removeChild(scr)


// function INJECT_SCRIPT (script) {
//   const wrappedScript = `(function () { ${script} })();`
//   // inject code into "the other side" to talk back to this side;
//   const scr = document.createElement('script')
//   scr.textContent = `( () => {
//     const result = eval(${wrappedScript})
//     const event = document.createEvent('INJECT_SCRIPT');
//     event.initCustomEvent('MyCustomEvent', true, true, { result } )
//     window.dispatchEvent(event)
//   } )();`;
//   (document.head || document.documentElement).appendChild(scr)
//   // and then hide the evidence as much as possible.
//   scr.parentNode.removeChild(scr)
//   //  No return statement, the custom event returns our vals
// }
// // now listen for the message
// window.addEventListener('INJECT_SCRIPT', e => {
//   const check = e.detail.passback;
//   console.log('RESPONSE', e.detail, check)
//   // [do what you need to here].
// })
// INJECT_SCRIPT('return 9001;')
//
// function INJECT_SCRIPT (script) {
//   // const wrappedScript = `(function () { ${script} })();`
//   // inject code into "the other side" to talk back to this side;
//   const scr = document.createElement('script')
//   scr.textContent = `(function () {
//     const result = eval(5);
//     const event = document.createEvent('CustomEvent');
//     event.initCustomEvent('MyCustomEvent', true, true, { result } );
//     window.dispatchEvent(event);
//   })();`;
//   (document.head || document.documentElement).appendChild(scr)
//   // and then hide the evidence as much as possible.
//   scr.parentNode.removeChild(scr)
//   //  No return statement, the custom event returns our vals
// }
// // now listen for the message
// window.addEventListener('INJECT_SCRIPT', e => {
//   const { result } = e.detail
//   console.log('RESPONSE', result)
//   // [do what you need to here].
// })
// INJECT_SCRIPT('return 9001;')
//


function INJECT_SCRIPT (script) {
  // const wrappedScript = "(function () {" + script + "})();"
  // inject code into "the other side" to talk back to this side;
  const scr = document.createElement('script')
  scr.textContent = `(function () {
    const result = (function () {
      ${script}
    })();
    const event = document.createEvent('CustomEvent');
    event.initCustomEvent('INJECT_SCRIPT', true, true, { result } );
    window.dispatchEvent(event);
  })();`;
  (document.head || document.documentElement).appendChild(scr)
  // and then hide the evidence as much as possible.
  scr.parentNode.removeChild(scr)
  //  No return statement, the custom event returns our vals
}
// now listen for the message
window.addEventListener('INJECT_SCRIPT', e => {
  const { result } = e.detail
  console.log('RESPONSE', result)
})
INJECT_SCRIPT('return 9001;')
