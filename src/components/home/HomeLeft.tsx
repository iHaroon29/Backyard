import { Github, Linkedin, Twitter, MoveUpRight } from 'lucide-react'
import { ReactNode } from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

type Props = {
  children?: ReactNode
  theme: string
}

export const HomeLeft = ({ theme }: Props) => {
  const bodyClassList = `${
    theme === 'dark' ? 'text-black' : 'text-white'
  } w-full h-full p-4 flex flex-row items-center justify-center sm:w-1/2`
  return (
    <div className={bodyClassList}>
      <div className='rounded-lg'>
        <h2 className='text-4xl text-center'>Hello! I'm Haroon.</h2>
        <p className='scroll-m-20 text-md tracking-tight text-center text-slate-700 bg-slate-200 italic p-2 rounded sm:p-4 sm:text-2xl'>
          A Javascript Programmer and League of Legends enthusiast.
        </p>
        <div className='flex w-full justify-center mt-4'>
          <div className='icon-border p-2 rounded-xl hover:bg-[#030711] hover:text-white ease-in-out'>
            <Github size={32} />
          </div>
          <div className='icon-border p-2 rounded-xl hover:bg-[#005b8e] hover:text-white ease-in-out'>
            <Linkedin size={32} />
          </div>
          <div className='icon-border p-2 rounded-xl hover:bg-[#0aa4fc] hover:text-white ease-in-out'>
            <Twitter size={32} />
          </div>
        </div>
        <div className='btn-holder flex justify-center mt-4'>
          <Link
            to='https://docs.google.com/document/d/1wUon8dZuvDHZjLwVeNW4zoWzqUtoTOXHczxEp4Joafo/edit?usp=sharing'
            target='_blank'
          >
            <Button
              variant={'ghost'}
              className='p-2 w-[150px] flex justify-center items-center shadow-xl text-black rounded-md text-xl bg-[#dafd00] dark:text-white dark:bg-[#161900]'
            >
              Resume
              <span className='ml-3 p-1 rounded-full inline-block bg-[#bdd71a]'>
                <MoveUpRight size={20} strokeWidth={4} />
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
