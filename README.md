# Web3 Telegram Mini App Boilerplate

A ready-to-use boilerplate for building Web3 Telegram Mini Apps.
This tech stack includes:
- [React](https://react.dev/) + [Express](https://expressjs.com/)
- [Wagmi](https://wagmi.sh/) + [WalletConnect](https://reown.com/)
- [TON Connect](https://docs.ton.org/develop/dapps/ton-connect/overview)
- [@telegram-apps SDK](https://docs.telegram-mini-apps.com/packages/telegram-apps-sdk/2-x)
- [Telegram UI](https://tgui.xelene.me/?path=/docs/getting-started--documentation)

## Install Dependencies

Install the project dependencies using:

```bash
yarn install
```

## Scripts

This project contains the following scripts:

- `dev`: Runs the application in development mode
- `build`: Builds the application for production
- `start`: Starts the production server
- `test`: Runs tests
- `eject`: Ejects from create-react-app

## Supported Wallets

- MetaMask
- Binance Wallet
- OKX Wallet
- Bitget Wallet
- Trust Wallet
- TONConnect

Note: Deep link support is implemented for common wallets and can be extended in [`App.js`](https://github.com/kevinb1003/web3-telegram-mini-app/blob/master/src/App.js#L21-L59):

- `bitkeep://`
- `metamask://`
- `trust://`
- `wc://`
- `okex://`
- `bnc://`

## Setup and Development

### Environment Setup

1. Create a `.env` file in the root directory:

```bash
WC_WEB3_PROJECT_ID=your_walletconnect_project_id  # Get this from https://cloud.walletconnect.com/
REACT_APP_PUBLIC_URL=your dApp public url
```

2. Configure TON Connect manifest:
   The TON Connect manifest is stored in `public/tonconnect-manifest.json`. Remember to [configure](https://docs.ton.org/develop/dapps/ton-connect/manifest) this file according to your project's information.

3. Install dependencies:

```bash
yarn install
```

4. Start the development server:

```bash
yarn dev
```

The app will be available at `http://localhost:3000`.

### Production

1. Build the application:

```bash
yarn build
```

2. Start the production server:

```bash
yarn start
```

Note: Always ensure your `.env` file is properly configured before starting either development or production servers.

## Useful Links

- [Telegram Mini Apps Documentation](https://docs.telegram-mini-apps.com/)
- [Wagmi Documentation](https://wagmi.sh/react/getting-started)
- [TON Connect Documentation](https://docs.ton.org/develop/dapps/ton-connect/overview)
- [Telegram UI Components](https://tgui.xelene.me/?path=/docs/getting-started--documentation)
- [Telegram Developers Community](https://t.me/devs)
