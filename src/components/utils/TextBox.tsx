import { FC, ReactNode } from 'react'

interface Props {
  icon: ReactNode
  title: string
  sub: string
  text: string
  node: ReactNode | boolean
}

const TextBox: FC<Partial<Props>> = ({
  icon,
  title,
  sub,
  text,
  node = false,
}) => {
  return (
    <div
      className={`rounded-2xl bg-white dark:bg-gray-800 py-8 px-4 m-0 ${
        !node && 'flex'
      }`}
    >
      {node ? (
        node
      ) : (
        <>
          <div className='h-full text-blue-500 text-xl'>{icon}</div>
          <div className='h-full ml-4 space-y-5'>
            {title && (
              <h4 className='font-semibold text-xl text-gray-700 dark:text-gray-100  capitalize'>
                {title}
              </h4>
            )}
            <h4 className='leading-loose text-xl text-gray-600 dark:text-gray-300 capitalize '>
              {text}
            </h4>
            <p className='font-light text-gray-500 dark:text-gray-400'>{sub}</p>
          </div>
        </>
      )}
    </div>
  )
}

export default TextBox
