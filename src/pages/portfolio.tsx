import type { NextPage } from 'next'
import Button from '../components/utils/Button'
import Title from '../components/utils/Title'
import Main from '../layout/Main'

const portfolio: NextPage = () => {
  return (
    <Main>
      <header className='text-center font-muli pt-12'>
        <Title
          title='My'
          specific='Portfolio'
          className='text-6xl md:text-7xl font-bold'
        />
      </header>

      <section className='flex space-x-5 justify-center w-full mt-20'>
        <Button
          title='All'
          className='px-6 focus:bg-white focus:text-blue-600'
        />
        <Button
          title='React'
          className='px-6 focus:bg-white focus:text-blue-600'
        />
        <Button
          title='Next'
          className='px-6 focus:bg-white focus:text-blue-600'
        />
        <Button
          title='Js'
          className='px-6 focus:bg-white focus:text-blue-600'
        />
      </section>

      <section className='grid grid-cols-3 gap-10 mt-20'>
        <div className='bg-red-800 rounded-3xl shadow-lg h-64 hover:bg-red-900'>d</div>
        <div className='bg-cyan-800 rounded-3xl shadow-lg h-64 hover:bg-cyan-900'>d</div>
        <div className='bg-indigo-800 rounded-3xl shadow-lg h-64 hover:bg-indigo-900'>
          d
        </div>
        <div className='bg-blue-800 rounded-3xl shadow-lg h-64 hover:bg-blue-900'>d</div>
      </section>
    </Main>
  )
}

export default portfolio
