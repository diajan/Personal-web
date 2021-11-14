import React, { ReactNode } from 'react'

interface Props {
  link: string
  icon: ReactNode | string
  className?: string
}

const Title: React.FC<Props> = ({ icon, link, className }) => {
  return (
    <div>
      <a href={link} className={`hover:text-blue-500 ${className}`}>
        <i className={`fab ${icon}`}></i>
      </a>
    </div>
  )
}

export default Title
