import { FC } from 'react'

interface Props {}

const Step: FC = ({}) => {
  return (
    <div className='w-full p-2 mb-10 relative'>
      <div className='w-3 h-3 absolute  rounded-full top-12 bg-blue-600' style={{left:'3px'}}></div>
      <div className='border-l-2 border-blue-500 p-3'>
        <div className='space-y-4'>
          <h6 className='text-gray-700'>Master in Computer Science</h6>
          <p className='text-blue-500'>2020 - 2021</p>
        </div>
        <div className='text-gray-700 font-light'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Exercitationem autem necessitatibus atque? Sit commodi accusantium
          obcaecati, quaerat nemo quo fugit consequatur recusandae eveniet iste
          esse cupiditate, voluptas ab, sed asperiores?
        </div>
      </div>
    </div>
  )
}

export default Step
