import React from 'react'

const Spinner = () => {
  const containerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
  }

  const rotationStyle = {
    width: '50px',
    height: '50px',
    border: '3px solid rgba(36, 161, 222, 0.3)',
    borderTop: '3px solid #2aabee',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  }

  return (
    <div style={containerStyle}>
      <div style={rotationStyle} />
      <style>
        {`
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </div>
  )
}

export default Spinner
