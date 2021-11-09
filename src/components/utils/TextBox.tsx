import { FC } from 'react'
import Title from './Title'

interface Props {
  icon: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
  title: string
  sub: string
}

const TextBox: FC<Props> = ({ icon, title, sub }) => {
  return (
    <div className='flex rounded-2xl bg-white py-8 px-4'>
      <div className='h-full text-blue-500 text-2xl'>{icon}</div>
      <div className='h-full ml-4 space-y-5'>
        <h4 className='font-semibold text-xl text-gray-700 capitalize'>{title}</h4>
        <p className='font-light text-gray-500'>{sub}</p>
      </div>
    </div>
  )
}

export default TextBox
