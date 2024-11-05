import {
  mockTelegramEnv,
  parseInitData,
  retrieveLaunchParams,
} from '@telegram-apps/sdk-react'

// Only mock the Telegram environment in development mode.
if (process.env.NODE_ENV === 'development') {
  let shouldMock

  // Try to get launch params. If successful, we're in Telegram.
  try {
    retrieveLaunchParams()
    shouldMock = Boolean(sessionStorage.getItem('____mocked'))
  } catch (error) {
    shouldMock = true
  }

  if (shouldMock) {
    const rawInitData = new URLSearchParams([
      [
        'user',
        JSON.stringify({
          id: 12345678,
          first_name: 'sample',
          last_name: 'user',
          username: 'sampleuser',
          language_code: 'en',
          is_premium: false,
          allows_write_to_pm: false,
        }),
      ],
      [
        'hash',
        'abcd1234ef567890ghijklmnopqrstu1234567890abcd1234ef567890ghijklmn',
      ],
      ['auth_date', '1716920000'],
      ['start_param', 'sample'],
      ['chat_type', 'sender'],
      ['chat_instance', '1234567890123456789'],
    ]).toString()

    mockTelegramEnv({
      themeParams: {
        accentTextColor: '#6ab2f2',
        bgColor: '#17212b',
        buttonColor: '#5288c1',
        buttonTextColor: '#ffffff',
        destructiveTextColor: '#ec3942',
        headerBgColor: '#17212b',
        hintColor: '#708499',
        linkColor: '#6ab3f3',
        secondaryBgColor: '#232e3c',
        sectionBgColor: '#17212b',
        sectionHeaderTextColor: '#6ab3f3',
        subtitleTextColor: '#708499',
        textColor: '#000000',
      },
      initData: parseInitData(rawInitData),
      initDataRaw: rawInitData,
      version: '7.2',
      platform: 'tdesktop',
    })
    sessionStorage.setItem('____mocked', '1')

    console.info(
      'Environment was mocked for development. This will not run in production.'
    )
  }
}
