import { useNavigate } from 'react-router-dom'
import { backButton } from '@telegram-apps/sdk-react'
import { useEffect } from 'react'

const Page = ({ children, back = true }) => {
  const navigate = useNavigate()

  useEffect(() => {
    if (back) {
      backButton.show()
      return backButton.onClick(() => {
        navigate(-1)
      })
    }
    backButton.hide()
  }, [back, navigate])

  return (
    <div
      style={{
        maxWidth: 1200,
        margin: '20px auto',
        textAlign: 'center',
        wordWrap: 'break-word',
      }}
    >
      {children}
    </div>
  )
}

export default Page
