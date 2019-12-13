global.browser = require('webextension-polyfill')

const bkg = chrome.extension.getBackgroundPage()
bkg.console.log('foo')

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  console.log('tabs.onUpdated!')
  console.log(tab.url)
})

chrome.tabs.onCreated.addListener(function (tab) {
  console.log('tabs.onCreated!', tab)
  // chrome.tabs.remove(tab.id, () => {})
  console.log(tab.url)
})

chrome.commands.onCommand.addListener(function (command) {
  console.log('Command:', command)
  if (command === 'save') {
    alert('save 2')
  } else if (command === 'random') {
    alert('random')
  }
})

// get active tab

// chrome.tabs.query({
//   active: true,
//   lastFocusedWindow: true
// }, (tabs) => {
//   // and use that tab to fill in out title and url
//   var tab = tabs[0]
//   console.log(tab.url)
// })
