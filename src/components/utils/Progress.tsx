import React from 'react'

interface Props {
  skill: string
  percent: string | number
}
const Progress: React.FC<Props> = ({ skill, percent }) => {
  return (
    <div className='relative pt-1 text-gray-800'>
      <div className='flex mb-2 items-center justify-between'>
        <div>
          <span
            className='
          text-xs
          font-bold
          inline-block
          py-1
          px-2
          uppercase
          rounded-full
          dark:text-white
        '>
            {skill}
          </span>
        </div>
        <div className='text-right'>
          <span className='text-xs font-semibold inline-block dark:text-gray-200'>
            {`${percent}%`}
          </span>
        </div>
      </div>
      <div className='overflow-hidden h-2 mb-4 text-xs flex rounded dark:bg-blue-200'>
        <div
          style={{ width: `${percent}%` }}
          className='
        shadow-none
        flex flex-col
        text-center
        whitespace-nowrap
        text-white
        justify-center
        rounded-full
        bg-blue-500
      '></div>
      </div>
    </div>
  )
}

export default Progress
