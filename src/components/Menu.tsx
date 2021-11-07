import React from 'react'

const Menu: React.FC<{}> = () => {
  return (
    <div className='shadow w-20 h-screen bg-blue-50 rounded-r-3xl fixed'>
      <div className='flex flex-col h-full items-center justify-center space-y-16 text-xl text-cyan-700'>
        <div className='flex flex-col place-items-center space-y-2'>
          <i className='cursor-pointer hover:text-cyan-600 fas fa-home'></i>
          <span className='text-xs'>Home</span>
        </div>
        <div className='flex flex-col place-items-center space-y-2'>
          <i className='cursor-pointer hover:text-cyan-600 fas fa-user'></i>
          <span className='text-xs'>About Me</span>
        </div>
        <div className='flex flex-col place-items-center space-y-2'>
          <i className='cursor-pointer hover:text-cyan-600 fas fa-briefcase'></i>
          <span className='text-xs'>Portfolio</span>
        </div>
        <div className='flex flex-col place-items-center space-y-2'>
          <i className='cursor-pointer hover:text-cyan-600 far fa-id-card'></i>
          <span className='text-xs'>Resume</span>
        </div>
        <div className='flex flex-col place-items-center space-y-2'>
          <i className='cursor-pointer hover:text-cyan-600 fas fa-paper-plane'></i>
          <span className='text-xs'>Contact</span>
        </div>
      </div>

      <style jsx>{`
        .shadow {
          -webkit-box-shadow: 0px 0px 5px 0px #d8d8d8;
          box-shadow: 3px 3px 8px rgb(55 84 170 / 10%), -3px -3px 8px white;
        }
      `}</style>
    </div>
  )
}

export default Menu
