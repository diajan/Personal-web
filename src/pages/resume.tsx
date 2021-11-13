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

      <section className='grid gap-12'>
        <div>
          {/*education*/}
          <Title
            title='Education'
            className='text-4xl'
            icon={
              <i className='fas fa-graduation-cap text-3xl text-blue-500 mr-4'></i>
            }
          />
          <TextBox className='lg:grid lg:grid-cols-2'>
            {EDUCATION.map(({ title, sub, desc }) => (
              <Step key={title} title={title} sub={sub} desc={desc} />
            ))}
          </TextBox>
        </div>

        <div>
          {/*experience*/}
          <Title
            title='Experience'
            className='text-4xl'
            icon={
              <i className='fas fa-graduation-cap text-3xl text-blue-500 mr-4'></i>
            }
          />
          <TextBox className='lg:grid lg:grid-cols-2'>
            {EXPERIENCE.map(({ title, sub, desc }) => (
              <Step key={title} title={title} sub={sub} desc={desc} />
            ))}
          </TextBox>
        </div>

        <div>
          {/*lang*/}
          <Title title='Language ' specific='Skills' className='text-3xl' />
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

      <section className='mt-12'>
        <div className='flex place-self-start space-y-5'>
          <Title title='Work' specific='Skills' className='text-3xl' />
        </div>
        <TextBox className='lg:grid lg:grid-cols-2 lg:gap-x-8 '>
          {SKILLS.map(({ skill, percent }) => (
            <ProgressBar key={skill} skill={skill} percent={percent} />
          ))}
        </TextBox>
      </section>
    </Main>
  )
}

export default resume
