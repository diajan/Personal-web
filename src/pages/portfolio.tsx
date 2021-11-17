import type { NextPage } from 'next'
import { useState } from 'react'
import Main from '../layout/Main'
import Button from '../components/utils/Button'
import Card from '../components/utils/Card'
import Title from '../components/utils/Title'
import { PORTFOLIOS } from '../../constant'

const Portfolio: NextPage = () => {
  const [fliter, setFliter] = useState<string>()

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

      <section className='grid gap-y-10 md:grid-cols-2 md:gap-10 lg:grid-cols-3 my-20'>
        {PORTFOLIOS.map(({ title, repo, link, img }, index) => (
          <Card
            key={index + 1}
            title={title}
            img={img}
            repo={repo}
            link={link}
          />
        ))}
      </section>
    </Main>
  )
}

export default Portfolio
