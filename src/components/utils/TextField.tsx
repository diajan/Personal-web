import React, { ReactNode } from 'react'

interface Props {
  type: 'text' | 'password' | 'button' | 'submit' | 'email'
  placeholder: string
  label?: string
  className?: string
}

const IconTitle: React.FC<Props> = ({ label, type, placeholder }) => {
  return (
    <div className='mb-4'>
      <label className='block text-gray-700 text-sm font-bold mb-2'>
        {label}
      </label>
      <input
        className='bg-gray-100 dark:bg-gray-700 shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        id={label}
        type={type}
        placeholder={placeholder}
      />
    </div>
  )
}

export default IconTitle
