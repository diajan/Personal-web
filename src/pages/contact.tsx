import type { NextPage } from 'next'
import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import axios from 'axios'
import { PERSON, SOCIAL_MEDIA } from '../../constant'
import Main from '../layout/Main'
import Title from '../components/utils/Title'
import IconTitle from '../components/utils/IconTitle'
import Field from '../components/utils/Field'
import Button from '../components/utils/Button'
import Copyright from '../components/Copyright'
import Toast from '../components/utils/Toast'
import { ToastProvider } from 'react-toast-notifications'

const PHONE_NUMBER = PERSON.find(el => el.title === 'Phone')
const MAIL = PERSON.find(el => el.title === 'Mail')
const LINKEDIN = SOCIAL_MEDIA.find(el => el.title === 'linkedin')

interface Data {
  name: String
  email: string
  subject: string
  message: string
}

type Message = {
  message: string
  appearance: 'success' | 'error' | 'info' | null
}

const Contact: NextPage = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [message, setMessage] = useState<Message>({
    appearance: null,
    message: '',
  })
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Data>()

  const onSubmit: SubmitHandler<Data> = async data => {
    setLoading(true)
    try {
      const response = await axios(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/mailer`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          data,
        }
      )

      if (response.status === 200) {
        setLoading(false)
        setMessage({ appearance: 'success', message: 'Email Sent!! Thanks' })
        reset()
      }
    } catch (error) {
      setMessage({ appearance: 'error', message: '500 Server Error' })
      console.log('ERROR ===> ', error)
    }
  }

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
              register={register('email', {
                required: 'Email Is Required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid Email Address',
                },
              })}
              errors={errors.email}
            />
          </div>
          <Field
            type='text'
            placeholder='Subject'
            register={register('subject', {
              required: 'Subject Is Required',
            })}
            errors={errors.subject}
          />
          <Field
            type='text'
            placeholder='Message'
            textarea
            register={register('message', {
              required: 'Message Is Required',
            })}
            errors={errors.message}
          />
          <Button
            title='Send Message'
            className='mt-4'
            type='submit'
            disabled={loading}
          />
        </form>
        <ToastProvider>
          <Toast toast={message} />
        </ToastProvider>
      </section>
      <Copyright />
    </Main>
  )
}

export default Contact