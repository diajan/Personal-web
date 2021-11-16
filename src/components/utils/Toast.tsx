import { FC, useEffect } from 'react'
import { useToasts } from 'react-toast-notifications'

type ToastType = {
  message: string
  appearance: 'success' | 'error' | 'info' | null
}

interface Props {
  toast: ToastType
}

const Toast: FC<Props> = ({ toast }) => {
  const { addToast } = useToasts()
  useEffect(() => {
    toast.appearance &&
      addToast(toast.message, {
        appearance: toast.appearance,
        autoDismiss: true,
      })
  }, [addToast, toast.appearance, toast.message])

  return null
}

export default Toast
