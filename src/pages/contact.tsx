import Main from '../layout/Main'
import type { NextPage } from 'next'
import Title from '../components/utils/Title'
import { PERSON, SOCIAL_MEDIA } from '../../constant'
import IconTitle from '../components/utils/IconTitle'
import TextField from '../components/utils/TextField'
import { useForm, SubmitHandler } from 'react-hook-form'

const PHONE_NUMBER = PERSON.find(el => el.title === 'Phone')
const MAIL = PERSON.find(el => el.title === 'Mail')
const LINKEDIN = SOCIAL_MEDIA.find(el => el.title === 'linkedin')

interface IFormInput {
  firstName: String
}

const contact: NextPage = () => {
  const { register, handleSubmit } = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = data => console.log(data)

  return (
    <Main>
      <header className='text-center font-muli pt-12 mb-20'>
        <Title
          title='Get'
          specific='in Touch'
          className='text-5xl md:text-7xl font-bold'
          sub='Contact to me with ...'
        />
      </header>

      <section className='grid gap-y-10 lg:grid-cols-3 lg:gap-x-5 '>
        <IconTitle
          icon={<i className='fas fa-phone text-5xl text-blue-500'></i>}
          title='Call'
          sub={PHONE_NUMBER?.value}
          className='text-3xl'
        />

        <IconTitle
          icon={<i className='fab fa-linkedin text-5xl text-blue-500'></i>}
          title='Linkedin'
          sub={LINKEDIN?.link}
          className='text-3xl'
          linked
        />

        <IconTitle
          icon={<i className='fas fa-envelope-open text-5xl text-blue-500'></i>}
          title='Mail'
          sub={MAIL?.value}
          className='text-3xl'
        />
      </section>

      <section className='mt-20'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='grid grid-cols-2 gap-x-5'>
            <TextField type='text' placeholder='Name' />
            <TextField type='email' placeholder='Email' />
          </div>
          <TextField type='text' placeholder='Subject' />
        </form>
      </section>
    </Main>
  )
}

export default contact
