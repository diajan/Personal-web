import React from 'react'

interface Props {
  onClick: (() => void | undefined) | undefined
}

const Switch: React.FC<Props> = ({ onClick }) => {
  return (
    <div className='flex items-center fixed right-0 m-6 p-2 rounded-md z-50'>
      <input className='hidden' id={`switch`} type='checkbox' />
      <label
        onClick={onClick}
        className='label flex items-center justify-between transition-all duration-1000 cursor-pointer relative w-12 h-6 rounded-full bg-gray-400 dark:bg-gray-50'
        htmlFor={`switch`}>
        <span className='button absolute top-1 left-1 w-4 h-4 transition-all duration-200 rounded-full shadow-xl bg-gray-100 dark:bg-gray-400' />
      </label>
      <style jsx>{`
        #switch:checked + .label .button {
          left: calc(100% - 2px);
          transform: translateX(-100%);
          background: #111827;
        }
      `}</style>
    </div>
  )
}

export default Switch
