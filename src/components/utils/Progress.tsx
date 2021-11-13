import React from 'react'

interface Props {
  skill: string
  percent: string | number
}
const Progress: React.FC<Props> = ({ skill, percent }) => {
  return (
    <div className='relative pt-1 text-gray-700'>
      <div className='flex mb-2 items-center justify-between'>
        <div>
          <span
            className='
          text-sm
          font-bold
          inline-block
          py-1
          px-2
          uppercase
          rounded-full
          dark:text-white
        '
          >
            {skill}
          </span>
        </div>
        <div className='text-right'>
          <span className='text-xs font-extrabold inline-block dark:text-gray-200'>
            {`${percent}%`}
          </span>
        </div>
      </div>
      <div className='shim overflow-hidden h-2 mb-4 text-xs flex rounded dark:bg-blue-200'>
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
      '
        ></div>
      </div>
      <style jsx>{`
        .shim {
          position: relative;
          overflow: hidden;
        }
        .shim::after {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          transform: translateX(-100%);
          background-image: linear-gradient(
            90deg,
            rgba(233, 233, 233, 1) 0,
            rgba(233, 233, 233, 0.9) 50%,
            rgba(233, 233, 233, 0.8) 100%
          );
          animation: shimmer 8s ease-out infinite;
          content: '';
        }

        @keyframes shimmer {
          100% {
            transform: translateX(0%);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}

export default Progress
