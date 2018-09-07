// @flow
import React from 'react'
import ReactDOM from 'react-dom'

import registerServiceWorker from './registerServiceWorker'
import Root from './Root'

// NOTE: Use bootstrap only for reboot css
import 'bootstrap/scss/bootstrap-reboot.scss'

ReactDOM.render(
  <Root />,
  (document.getElementById('root'): any)
)

registerServiceWorker()
