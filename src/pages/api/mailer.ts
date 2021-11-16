import { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'
import { emailTemplate, PERSON } from '../../../constant'

const MAIL = PERSON.find(el => el.title === 'Mail')

const mailer = async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email, subject, message } = req.body
  const transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  })

  try {
    const send = await transport.sendMail({
      from: process.env.EMAIL,
      to: MAIL!.value,
      subject: `From ${name}:  ${subject}`,
      html: emailTemplate(name, email, subject, message),
    })

    console.log('EMAIL SENT', send.messageId)
    res.status(200).json({ status: 'EMAIL_SEND (:' })
  } catch (error) {
    console.log('EROR ===> ', error)
    res.status(500).json({ status: 'EMAIL_NOT_SEND ):' })
  }
}

export default mailer
