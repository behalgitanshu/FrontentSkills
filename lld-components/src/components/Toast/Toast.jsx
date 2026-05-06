import { useState, useEffect } from 'react'

const STYLES = {
  Toast: {
    height: '30px',
    width: '250px',
    borderRadius: '5px',
    display: 'flex',
  },
  Message: {
    margin: 'auto',
    color: 'white',
  },
}

// Toast Component
const Toast = ({ message, type, duration }) => {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timerId = setTimeout(() => setVisible(false), duration)
    return () => clearTimeout(timerId)
  }, [duration])

  const bgColor =
    type === 'success' ? 'green' : type === 'error' ? 'red' : 'blue'

  if (!visible) return null

  return (
    <div
      style={{
        ...STYLES.Toast,
        backgroundColor: bgColor,
      }}
    >
      <div style={STYLES.Message}>{message}</div>
    </div>
  )
}

export default Toast
