import React from 'react'

interface Props {
  title:
    | string
    | React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  onClick?: () => void
}

const Button: React.FC<Props> = ({
  title,
  className,
  type,
  onClick,
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${className}  grid cursor-pointer place-items-center transition-colors p-2 text-white rounded-md ${
        disabled
          ? 'bg-gray-500 cursor-not-allowed'
          : 'bg-blue-600 hover:bg-blue-500'
      } `}
      disabled={disabled}>
      {title}

      <style jsx>{`
        div {
          width: fit-content;
        }
      `}</style>
    </button>
  )
}

export default Button
