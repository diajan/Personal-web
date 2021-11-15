import Main from '../layout/Main'
import type { NextPage } from 'next'
import Title from '../components/utils/Title'
import { PERSON, SOCIAL_MEDIA } from '../../constant'
import IconTitle from '../components/utils/IconTitle'
import Field from '../components/utils/Field'
import { useForm, SubmitHandler } from 'react-hook-form'
import Button from '../components/utils/Button'
import Copyright from '../components/Copyright'

const PHONE_NUMBER = PERSON.find(el => el.title === 'Phone')
const MAIL = PERSON.find(el => el.title === 'Mail')
const LINKEDIN = SOCIAL_MEDIA.find(el => el.title === 'linkedin')

interface IFormInput {
  name: String
  email: string
  subject: string
  message: string
}

const Contact: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>()

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
          <div className='grid lg:grid-cols-2 lg:gap-x-5'>
            <Field
              type='text'
              placeholder='Name'
              register={register('name', { required: 'Name Is Required' })}
              errors={errors.name}
            />
            <Field
              type='email'
              placeholder='Email'
              register={register('email', { required: 'Email Is Required' })}
              errors={errors.email}
            />
          </div>
          <Field
            type='text'
            placeholder='Subject'
            register={register('subject', { required: 'Subject Is Required' })}
            errors={errors.subject}
          />
          <Field
            type='text'
            placeholder='Message'
            textarea
            register={register('message', { required: 'Message Is Required' })}
            errors={errors.message}
          />
          <Button title='Send Message' className='mt-4' type='submit' />
        </form>
      </section>
      <Copyright />
    </Main>
  )
}

export default Contact
