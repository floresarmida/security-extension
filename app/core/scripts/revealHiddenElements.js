// /*
// Parses the page, forcefully revealing hidden page elements
// */
// export default function revealHiddenElements (selector = '*') {
//   let nodes = Array.from(document.querySelectorAll(selector))
//   let hidden = nodes
//     .filter(e => e.hidden || e.style.display === 'hidden' || e.style.cssText.includes('hidden'))
//   for (let e of hidden) {
//     e.style.cssText = 'display: inline-block !important; 1px solid red !important;'
//     e.hidden = false
//     console.warn('Revealed Element:', e)
//   }
//   return 'revealHiddenElements completed'
// }

export default `
console.log('revealHiddenElements ran!');
return 'Executed revealHiddenElements';
`
