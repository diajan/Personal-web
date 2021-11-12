import type { NextPage } from 'next'
import ProgressBar from '../components/utils/Progress'
import Step from '../components/utils/Step'
import TextBox from '../components/utils/TextBox'
import Title from '../components/utils/Title'
import Rating from '../components/utils/Rating'
import Main from '../layout/Main'
import { SKILLS, EDUCATION, EXPERIENCE } from '../../constant'

const resume: NextPage = () => {
  return (
    <Main>
      <header className='text-center font-muli pt-12 mb-10'>
        <Title
          title='My'
          specific='Resume'
          className='text-5xl md:text-7xl font-bold'
        />
      </header>

      <section className=''>
        <div className=''>
          <div className='flex place-self-start space-x-5'>
            <i className='fas fa-hammer text-3xl text-blue-500'></i>
            <Title title='Experience' className='text-4xl' />
          </div>
          <TextBox>
            {EDUCATION.map(({ title, sub, desc }) => (
              <Step title={title} sub={sub} desc={desc} />
            ))}
          </TextBox>
        </div>

        <div className=''>
          <div className='flex place-self-start space-x-5'>
            <i className='fas fa-graduation-cap text-3xl text-blue-500'></i>
            <Title title='Education' className='text-4xl' />
          </div>
          <TextBox>
            {EXPERIENCE.map(({ title, sub, desc }) => (
              <Step title={title} sub={sub} desc={desc} />
            ))}
          </TextBox>
        </div>

        <div className=''>
          <div className='flex place-self-start space-y-5'>
            <Title title='Language ' specific='Skills' className='text-3xl' />
          </div>
          <TextBox>
            <div className='flex justify-between'>
              <Title title='Persian' className='text-xl text-gray-700' />
              <Rating star='5' />
            </div>
            <div className='flex justify-between'>
              <Title title='English' className='text-xl text-gray-700' />
              <Rating star='3' />
            </div>
          </TextBox>
        </div>
      </section>

      <section className=''>
        <div>
          <div className='flex place-self-start space-y-5'>
            <Title title='Work' specific='Skills' className='text-3xl' />
          </div>
          <TextBox>
            {SKILLS.map(({ skill, percent }) => (
              <ProgressBar key={skill} skill={skill} percent={percent} />
            ))}
          </TextBox>
        </div>
      </section>
    </Main>
  )
}

export default resume
