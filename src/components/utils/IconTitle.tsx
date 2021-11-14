import React, { ReactNode } from 'react'

interface Props {
  title: string
  className: string
  specific: string
  sub: string
  icon: ReactNode
  linked: boolean
}

const IconTitle: React.FC<Partial<Props>> = ({
  title,
  specific,
  sub,
  icon,
  className,
  linked,
}) => {
  return (
    <div className='flex flex-col items-center text-gray-800'>
      {icon}
      <h1 className={`${className} mt-4 font-semibold dark:text-gray-100`}>
        {title} <span className='text-blue-500'>{specific}</span>
      </h1>
      <h5 className='text-gray-500 font-light mt-3'>
        {linked ? <a href={sub}>{sub}</a> : sub}
      </h5>
    </div>
  )
}

export default IconTitle
