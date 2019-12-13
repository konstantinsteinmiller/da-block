import Vue from 'vue'
import App from './App'

global.browser = require('webextension-polyfill')
Vue.prototype.$browser = global.browser

const bkg = chrome.extension.getBackgroundPage()
bkg.console.log('foo')

/* eslint-disable no-new */
new Vue({
  el: '#app',

  render: h => h(App)
})
