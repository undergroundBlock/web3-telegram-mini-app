import { createConfig, fallback, http, unstable_connector } from 'wagmi'
import { injected, walletConnect } from 'wagmi/connectors'
import { mainnet } from 'viem/chains'
import { WC_WEB3_PROJECT_ID } from '../constants'

const metadata = {
  name: 'Web3 tg-mini app',
  description: 'Test',
  url: 'http://localhost:3000',
}

const chains = [mainnet]

export const config = createConfig({
  chains,
  transports: {
    [mainnet.id]: fallback([
      unstable_connector(injected),
      http('https://ethereum.publicnode.com'),
      http('https://eth.llamarpc.com'),
      http('https://cloudflare-eth.com'),
    ]),
  },
  connectors: [
    injected(),
    walletConnect({
      projectId: WC_WEB3_PROJECT_ID,
      walletFeatures: false,
      showQrModal: false,
    }),
  ],
  metadata,
})
