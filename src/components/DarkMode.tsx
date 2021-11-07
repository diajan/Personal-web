import React from 'react'

const Switch = () => {
  return (
    <div className='flex items-center fixed right-0 m-6 p-2 rounded-md '>
      <input
        className='hidden'
        id={`switch`}
        type='checkbox'
      />
      <label className='label flex items-center justify-between transition-all duration-1000 cursor-pointer relative w-12 h-6 rounded-full bg-gray-400' htmlFor={`switch`}>
        <span className='button absolute top-1 left-1 w-4 h-4 transition-all duration-200 rounded-full shadow-xl bg-gray-800' />
      </label>
      <style jsx>{`
        #switch:checked + .label .button {
          left: calc(100% - 2px);
          transform: translateX(-100%);
          background: #fff;
        }
        
        .label:active .button {
          width: 80%;
        }
      `}</style>
    </div>
  )
}

export default Switch
