import type { NextPage } from 'next'
import Step from '../components/utils/Step'
import TextBox from '../components/utils/TextBox'
import Title from '../components/utils/Title'
import Main from '../layout/Main'

const resume: NextPage = () => {
  return (
    <Main>
      <header className='text-center font-muli pt-12 mb-10'>
        <Title
          title='My'
          specific='Resume'
          className='text-6xl md:text-7xl font-bold'
        />
      </header>

      <div className='flex place-self-start space-x-5'>
        <i className='fas fa-graduation-cap text-3xl text-blue-500'></i>
        <Title title='Education' className='text-4xl' />
      </div>
      <TextBox
        node={
          <>
            <Step />
            <Step />
            <Step />
            <Step />
          </>
        }
      />
    </Main>
  )
}

export default resume
