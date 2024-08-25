import { GitBranch, Linkedin, Twitter, MoveUpRight } from 'lucide-react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

export const HomeLeft = () => {
  const bodyClassList = `w-full h-full p-4 flex flex-col items-center text-white justify-center bg-opacity-0 lg:w-full dark:text-black z-2 relative`
  return (
    <div className='relative w-full h-full lg:w-1/2'>
      <div className='w-full h-full bg-[url(./assets/bg.jpg)]  absolute z-0'></div>
      <div className='w-full h-full bg-[#282828] opacity-20 absolute z-0'></div>
      <div className={bodyClassList}>
        <div className='rounded-lg'>
          <h2 className='text-4xl text-center bg-[#282828] ml-[55px] text-white p-2 sm:text-6xl inline-block rounded-t'>
            Hello! I'm Haroon.
          </h2>
          <p className='scroll-m-20 p-2 rounded-b bg-[#282828] text-xl tracking-tight text-center text-white italic sm:p-4 sm:text-2xl'>
            A Javascript Programmer and League of Legends Enthusiast.
          </p>
          <div className='w-full mt-4 flex justify-center'>
            <div className='icon-border p-1.5 mx-1 rounded-xl ease-in-out bg-[#282828] text-orange-500'>
              <Link to={'https://github.com/iHaroon29'} target='_blank'>
                <GitBranch size={28} />
              </Link>
            </div>
            <div className='icon-border p-1.5 mx-1 rounded-xl bg-[#005b8e] text-white ease-in-out'>
              <Link
                to={'https://www.linkedin.com/in/syed-haroon-ali-b67829140/'}
                target='_blank'
              >
                <Linkedin size={28} />
              </Link>
            </div>
            <div className='icon-border p-1.5 mx-1 rounded-xl bg-[#0aa4fc] text-white ease-in-out'>
              <Twitter size={28} />
            </div>
          </div>
          <div className='btn-holder mt-4 flex justify-center'>
            <Link
              to='https://docs.google.com/document/d/1wUon8dZuvDHZjLwVeNW4zoWzqUtoTOXHczxEp4Joafo/edit?usp=sharing'
              target='_blank'
            >
              <Button
                variant={'ghost'}
                className='p-2 w-[150px] flex justify-center items-center shadow-xl text-black rounded-md text-xl bg-[#dafd00] dark:text-white dark:bg-[#282828]'
              >
                Resume
                <span className='ml-3 p-1 rounded-full inline-block text-white bg-black dark:text-black dark:bg-[#dafd00]'>
                  <MoveUpRight size={20} strokeWidth={3} />
                </span>
              </Button>
            </Link>
          </div>
        </div>
        <div className='w-full h-1/4 my-4'>
          <h2 className='my-4 px-3 py-2 text-xl font-light tracking-tight inline-block rounded-md bg-[#282828] text-white'>
            Recent Activity
          </h2>
          <div className='activity-holder rounded-xl shadow w-full h-[200px] overflow-y-scroll p-4 bg-[#282828]'>
            <div className='w-full bg-gray-100 p-3 rounded-lg'>
              <time
                dateTime={new Date().toISOString().slice(0, 10)}
                className='block mt-2 mb-1'
              >
                {new Date().toISOString().slice(0, 10)}
              </time>
              <div className='text-holder'>
                <p className='text-2xl'>Added new Project</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
