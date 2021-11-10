import React, { useEffect, useState } from 'react'

interface Props {
  content: Array<{ title: string; value: string }>
}

const PairTitle: React.FC<Props> = ({ content }) => {
  return (
    <div className='text-lg font-light font-muli space-y-5'>
      {content.map(({ title, value }) => (
        <p
          key={title}
          className='font-semibold text-gray-700 dark:text-gray-200'>
          {title} : {'  '}
          <span className='text-gray-500 dark:text-gray-400 font-light block'>
            {value}
          </span>
        </p>
      ))}
    </div>
  )
}

export default PairTitle
