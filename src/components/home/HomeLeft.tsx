import { Github, Linkedin, Twitter, FileText } from 'lucide-react'
import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
  theme: string
}

export const HomeLeft = ({ theme }: Props) => {
  const bodyClassList = `${
    theme === 'dark' ? 'text-black' : 'text-white'
  } w-full h-[50%]  p-4 flex flex-row items-center justify-center md:h-full md:w-1/2`
  return (
    <div className={bodyClassList}>
      <div className='rounded-lg'>
        <h2 className='text-[2.8rem] text-center lg:text-6xl lg:mb-4'>
          Hello! I'm Haroon.
        </h2>
        <p className='scroll-m-20 text-xl tracking-tight text-center text-slate-700 bg-slate-200 italic p-4 rounded lg:text-2xl'>
          A Javascript Programmer and League of Legends enthusiast.
        </p>
        <div className='flex w-full justify-center mt-4'>
          <div className='icon-border p-2 rounded-xl hover:bg-black hover:text-white ease-in-out'>
            <Github size={24} />
          </div>
          <div className='icon-border p-2  rounded-xl hover:bg-[#005b8e] hover:text-white ease-in-out'>
            <Linkedin size={24} />
          </div>
          <div className='icon-border p-2  rounded-xl hover:bg-[#0aa4fc] hover:text-white ease-in-out'>
            <Twitter size={24} />
          </div>
          <div className='icon-border p-2  rounded-xl hover:bg-red-500 hover:text-white ease-in-out'>
            <FileText size={24} />
          </div>
        </div>
      </div>
    </div>
  )
}
