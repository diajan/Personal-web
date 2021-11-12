import React from 'react'

interface Props {
  star: number | string
}
const Progress: React.FC<Props> = ({ star }) => {
  const int = parseInt(String(star))
  const decimal = +String(star).split('.')[1]

  return (
    <div>
      <ul className='flex justify-center'>
        {[...Array(int)].map(() => (
          <li key={int}>
            <i className='fas fa-star fa-sm text-yellow-500 mr-1'></i>
          </li>
        ))}

        {decimal === 5 && (
          <li key={decimal}>
            <i className='fas fa-star-half-alt fa-sm text-yellow-500 mr-1'></i>
          </li>
        )}

        {+star <= 5 &&
          [...Array(5 - Math.ceil(+star))].map(() => (
            <li key={+star + 1}>
              <i className='far fa-star fa-sm text-yellow-500  mr-1'></i>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default Progress
