import { FC, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { PAGES } from '../../constant'

const infinitePage = (index: number, radix: number = 1) =>
  [0, 1, 2, 3, 4].includes(index + radix) ? index + radix : radix === -1 ? 4 : 0

const Chevrons: FC = ({}) => {
  const { push, pathname } = useRouter()
  const [index, setIndex] = useState<number>(0)

  useEffect(() => {
    setIndex(+PAGES.indexOf(pathname))
  }, [index, pathname])

  const handleNextPage = () => push(PAGES[infinitePage(index)])

  const handlePreviousPage = () => push(PAGES[infinitePage(index, -1)])

  return (
    <div className=' w-12 h-20 fixed bottom-8 right-0 space-y-3'>
      <div
        onClick={handleNextPage}
        className='animate-pulse w-full h-1/2 bg-blue-600 rounded-l-xl grid place-items-center cursor-pointer'>
        <i className='fas fa-chevron-up text-white'></i>
      </div>
      <div
        onClick={handlePreviousPage}
        className='animate-pulse w-full h-1/2 bg-blue-600 rounded-l-xl grid place-items-center  cursor-pointer'>
        <i className='fas fa-chevron-down text-white'></i>
      </div>
    </div>
  )
}

export default Chevrons
