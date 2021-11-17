import React from 'react'

interface Props {
  title: string
  img: string
  link?: string
  repo?: string
}

const Card: React.FC<Props> = ({ title, link, repo, img }) => {
  return (
    <div
      id='work'
      className='flex justify-center items-center bg-blue-800 rounded-3xl relative shadow-lg h-64 bg bg-no-repeat bg-cover bg-center'>
      <div
        id='work-overlay'
        className='flex flex-col space-y-5 justify-center items-center w-10/12 h-5/6 absolute rounded-md bg-blue-600 transform scale-50 opacity-0 transition-all duration-300 ease-in'>
        <div className='flex space-x-3'>
          <a
            href={link}
            target='_blank'
            className='bg-white text-blue-800 py-2 px-3 rounded-md'>
            <i className='fas fa-link '></i>
          </a>
          <a
            href={repo}
            target='_blank'
            className='bg-white text-blue-800 py-2 px-3 rounded-md'>
            <i className='fab fa-github '></i>
          </a>
        </div>
        <h4 className='text-white'>{title}</h4>
      </div>
      <style jsx>{`
        .bg {
          background-image:url(${img});
        }
        #work:hover #work-overlay {
          opacity: 0.95;
          transform: scale(1);
        }
      `}</style>
    </div>
  )
}

export default Card
