import React, { ReactNode } from 'react'

interface Props {
  title: string
  className: string
  specific: string
  sub: string
  icon: ReactNode
  children: ReactNode | boolean
}

const Title: React.FC<Partial<Props>> = ({
  title,
  specific,
  sub,
  children,
  icon,
  className,
}) => {
  return (
    <div>
      {children ? (
        children
      ) : (
        <div>
          <h1 className={`${className} dark:text-gray-100`}>
            {icon}
            {title} <span className='text-blue-500'>{specific}</span>
          </h1>
          <h5 className='text-gray-500 mt-5 font-light'>{sub}</h5>
        </div>
      )}
    </div>
  )
}

export default Title
