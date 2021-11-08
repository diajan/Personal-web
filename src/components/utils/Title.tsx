import React, { ReactNode } from 'react'

interface Props {
  title?: string
  specific?: string
  sub?: string
  node?: ReactNode
}

const Title: React.FC<Props> = ({ title, specific, sub, node }) => {
  console.log(node, !!node)
  return (
    <div>
      {node ? (
        node
      ) : (
        <div>
          <h1 className='text-6xl font-bold text-gray-800'>
            {title} <span className='text-blue-500'>{specific}</span>
          </h1>
          <h5 className='text-gray-500 mt-5 font-light'>{sub}</h5>
        </div>
      )}
    </div>
  )
}

export default Title
