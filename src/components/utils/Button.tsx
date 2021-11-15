import React from 'react'

interface Props {
  title:
    | string
    | React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

const Button: React.FC<Props> = ({ title, className, type }) => {
  return (
    <button
      type={type}
      className={`grid cursor-pointer place-items-center transition-colors bg-blue-600 p-2 text-white hover:bg-blue-500 rounded-md ${className}`}>
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
