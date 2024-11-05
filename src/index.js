import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './mockEnv.js'
import '@telegram-apps/telegram-ui/dist/styles.css'
import Root from './Root.js'
import { initialize } from './services/telegram-sdk.js'
import { retrieveLaunchParams } from '@telegram-apps/sdk-react'
import Spinner from './components/Spinner.js'

initialize(retrieveLaunchParams().startParam === 'debug')

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<Spinner />}>
      <Root />
    </Suspense>
  </React.StrictMode>
)
