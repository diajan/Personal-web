import React from 'react'

interface Props {
  title:
    | string
    | React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
  className?: string
}

const Button: React.FC<Props> = ({ title, className }) => {
  return (
    <div
      className={`grid cursor-pointer place-items-center bg-blue-600 p-2  rounded-md ${className}`}>
      {title}

      <style jsx>{`
        div {
          width: fit-content;
        }
      `}</style>
    </div>
  )
}

export default Button
