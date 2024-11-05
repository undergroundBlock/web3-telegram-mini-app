import {
  initData,
  miniApp,
  useLaunchParams,
  useSignal,
  openTelegramLink,
  openLink,
} from '@telegram-apps/sdk-react'
import { AppRoot } from '@telegram-apps/telegram-ui'
import { useEffect, useCallback } from 'react'
import { Navigate, Route, HashRouter, Routes } from 'react-router-dom'
import Home from './pages/Home'

const routes = [{ path: '/', Component: Home }]

const App = () => {
  const lp = useLaunchParams()

  // Wallet-connect is incompatible with Telegram mini apps
  // We should deep-links for wallets
  const overrideWindowOpen = useCallback(() => {
    window.open = (url) => {
      try {
        if (url.startsWith('tg://') || url.startsWith('https://t.me')) {
          openTelegramLink(url)
        } else if (url.startsWith('bitkeep://')) {
          const param = url.substring('bitkeep://'.length)
          openLink(`https://bkcode.vip/?pageAction=${param}`)
        } else if (url.startsWith('metamask://')) {
          const param = url.substring('metamask://'.length)
          openLink(`https://metamask.app.link/${param}`)
        } else if (url.startsWith('trust://')) {
          const param = url.substring('trust://'.length)
          openLink(`https://link.trustwallet.com/${param}`)
        } else if (url.startsWith('wc://')) {
          const param = url.substring('wc://'.length)
          openLink(`https://walletconnect.org/wc?uri=${param}`)
        } else if (url.startsWith('okex://')) {
          const encodedDappUrl = encodeURIComponent(url)
          openLink(
            `https://www.okx.com/download?appendQuery=true&deeplink=${encodedDappUrl}`
          )
        } else if (url.startsWith('bnc://')) {
          const param = url.substring(
            'bnc://app.binance.com/cedefi/wc?uri='.length
          )
          openLink(
            `https://app.binance.com/cedefi/wc?uri=${encodeURIComponent(param)}`
          )
        } else {
          openLink(url)
        }
      } catch (error) {
        console.error('Open with tg methods failed', error)
      }
      return null
    }
    return true
  }, [])

  useEffect(() => {
    const isTMA = initData

    if (!isTMA) {
      return
    }

    overrideWindowOpen()
  }, [overrideWindowOpen])

  const isDark = useSignal(miniApp.isDark)

  return (
    <AppRoot
      appearance={isDark ? 'dark' : 'light'}
      platform={['macos', 'ios'].includes(lp.platform) ? 'ios' : 'base'}
    >
      <HashRouter>
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} {...route} />
          ))}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </HashRouter>
    </AppRoot>
  )
}

export default App
