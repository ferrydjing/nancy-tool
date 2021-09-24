import { register } from 'register-service-worker'
import { MessageBox } from 'element-ui'

register(`${process.env.NODE_ENV === 'production' ? '/nancy-tool' : ''}/service-worker.js`, {
  ready(/* registration */) {
    console.log('Service worker is active.')
  },

  registered(/* registration */) {
    console.log('Service worker has been registered.')
  },

  cached(/* registration */) {
    console.log('Content has been cached for offline use.')
  },

  updatefound(/* registration */) {
    console.log('New content is downloading.')
  },

  updated(/* registration */) {
    MessageBox.confirm('当前有新的的内容，请刷新浏览器', '提示', {
      type: 'warning',
      closeOnClickModal: false,
      showCancelButton: false,
      showClose: false,
      closeOnPressEscape: false
    }).then(() => {
      window.location.reload()
    })
  },

  offline() {
    // console.log('No internet connection found. App is running in offline mode.')
  },

  error(/* err */) {
    // console.error('Error during service worker registration:', err)
  }
})
