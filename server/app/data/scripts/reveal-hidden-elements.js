/*
Name:         Get Inline Values
Version:      1.0
Author:       Ryan Keller
Description:  Parses the page, forcefully revealing hidden page elements
Group:        Inspection
*/
let selector = '*'
let output = []
let nodes = Array.from(document.querySelectorAll(selector))
let hidden = nodes
  .filter(e => e.hidden || e.style.display === 'hidden' || e.style.cssText.includes('hidden'))
for (let e of hidden) {
  e.style.cssText = 'display: inline-block !important; 1px solid red !important;'
  e.hidden = false
  const tag = JSON.stringify(e, ['id', 'className', 'tagName'])
  output.push(JSON.parse(tag))
}
RETURN(output)
