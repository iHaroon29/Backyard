import { Github, Linkedin, Twitter, MoveUpRight } from 'lucide-react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

export const HomeLeft = () => {
  const bodyClassList = `w-full h-full p-4 flex flex-row items-center text-white justify-center lg:w-1/2 dark:text-black`
  return (
    <div className={bodyClassList}>
      <div className='rounded-lg'>
        <h2 className='text-4xl text-center sm:text-6xl'>Hello! I'm Haroon.</h2>
        <p className='scroll-m-20 mt-4 p-2 rounded bg-slate-200 text-xl tracking-tight text-center text-slate-700 italic sm:p-4 sm:text-2xl'>
          A Javascript Programmer and League of Legends Enthusiast.
        </p>
        <div className='w-full mt-4 flex justify-center'>
          <div className='icon-border p-1.5 rounded-xl  ease-in-out'>
            <Link to={'https://github.com/iHaroon29'} target='_blank'>
              <Github size={28} />
            </Link>
          </div>
          <div className='icon-border p-1.5 rounded-xl hover:bg-[#005b8e] hover:text-white ease-in-out'>
            <Link
              to={'https://www.linkedin.com/in/syed-haroon-ali-b67829140/'}
              target='_blank'
            >
              <Linkedin size={28} />
            </Link>
          </div>
          <div className='icon-border p-1.5 rounded-xl hover:bg-[#0aa4fc] hover:text-white ease-in-out'>
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
              className='p-2 w-[150px] flex justify-center items-center shadow-xl text-black rounded-md text-xl bg-[#dafd00] dark:text-white dark:bg-[#161900]'
            >
              Resume
              <span className='ml-3 p-1 rounded-full inline-block text-white bg-black dark:text-black dark:bg-[#dafd00]'>
                <MoveUpRight size={20} strokeWidth={3} />
              </span>
            </Button>
          </Link>
        </div>
        <div className='w-full h-1/4'>
          <h2 className='text-lg font-light tracking-tight inline-block rounded-md my-4'>
            Recent Activity
          </h2>
          <div className='activity-holder rounded-xl shadow w-full h-[200px]'>
            <article></article>
          </div>
        </div>
      </div>
    </div>
  )
}
