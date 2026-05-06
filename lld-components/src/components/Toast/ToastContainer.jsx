import { useState } from 'react'
import Toast from './Toast'

const buttonStyle =
  'px-4 py-2 rounded-lg bg-gray-500 text-white font-bold hover:bg-gray-800 transition-colors cursor-pointer'

const ToastContainer = () => {
  const [toasts, setToasts] = useState([])

  const addToast = (type, message, duration = 3000) => {
    const id = Date.now()
    setToasts((prevToasts) => [...prevToasts, { id, type, message, duration }])
    setTimeout(() => {
      setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id))
    }, duration)
  }

  return (
    <>
      <div className="grid grid-cols-3 p-4 gap-4">
        <button
          className={buttonStyle}
          onClick={() => addToast('success', 'Success message', 5000)}
        >
          Show Success
        </button>
        <button
          className={buttonStyle}
          onClick={() => addToast('error', 'Error message', 10000)}
        >
          Show Error
        </button>
        <button
          className={buttonStyle}
          onClick={() => addToast('info', 'Info message', 7000)}
        >
          Show Info
        </button>
      </div>
      <div className="flex flex-col gap-4 items-center mx-auto">
        {toasts.length > 0 &&
          toasts.map(({ id, message, type, duration }) => (
            <Toast key={id} message={message} type={type} duration={duration} />
          ))}
      </div>
    </>
  )
}

export default ToastContainer
