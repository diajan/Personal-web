import type { NextPage } from 'next'
import { useState } from 'react'
import Main from '../layout/Main'
import Button from '../components/utils/Button'
import Card from '../components/utils/Card'
import Title from '../components/utils/Title'
import { PORTFOLIOS } from '../../constant'

//unique keywords
const keywords = Array.from(
  new Set(
    PORTFOLIOS.map(el => el.keyword)
      .join(' ')
      .split(' ')
  )
)

const Portfolio: NextPage = () => {
  const [filter, setFliter] = useState<string>('all')

  return (
    <Main>
      <header className='text-center font-muli pt-12'>
        <Title
          title='My'
          specific='Portfolio'
          className='leading-tight text-6xl md:text-7xl font-bold'
        />
      </header>

      <section className='flex flex-wrap space-x-5  justify-center w-full mt-20'>
        <Button
          key={'all'}
          title={'all'}
          className='capitalize focus:bg-white focus:text-blue-600 mt-5'
          onClick={() => setFliter('all')}
          active={'all' === filter}
        />
        {keywords.map((keyword, i) => (
          <Button
            key={++i}
            title={keyword}
            className='capitalize focus:bg-white focus:text-blue-600 mt-5'
            onClick={() => setFliter(keyword)}
            active={keyword === filter}
          />
        ))}
      </section>

      <section className='grid gap-y-10 md:grid-cols-2 md:gap-10 lg:grid-cols-3 my-20'>
        {PORTFOLIOS.filter(
          el => filter === 'all' || el.keyword.split(' ').includes(filter)
        ).map(({ title, repo, link, img }, i) => (
          <Card key={++i} title={title} img={img} repo={repo} link={link} />
        ))}
      </section>
    </Main>
  )
}

export default Portfolio
