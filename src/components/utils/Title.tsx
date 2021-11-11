import React, { ReactNode } from 'react'

interface Props {
  title: string
  className: string
  specific: string
  sub: string
  node: ReactNode
  icon: React.ReactNode
}

const Title: React.FC<Partial<Props>> = ({
  title,
  specific,
  sub,
  node,
  icon,
  className,
}) => {
  return (
    <div>
      {node ? (
        node
      ) : (
        <div>
          <h1 className={`${className} dark:text-gray-50`}>
            {title} <span className='text-blue-500'>{specific}</span>
          </h1>
          <h5 className='text-gray-500 mt-5 font-light'>{sub}</h5>
        </div>
      )}
    </div>
  )
}

export default Title
