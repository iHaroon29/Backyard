import { Github, Linkedin, Twitter, FileText } from 'lucide-react'
import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
  theme: string
}

export const HomeLeft = ({ theme }: Props) => {
  const bodyClassList = `${
    theme === 'dark' ? 'text-black' : 'text-white'
  } w-full h-[45%] p-4 flex flex-row items-center justify-center sm:h-full sm:w-1/2`
  return (
    <div className={bodyClassList}>
      <div className='rounded-lg'>
        <h2 className='text-3xl text-center sm:text-5xl lg:text-8xl lg:mb-4'>
          Hello! I'm Haroon.
        </h2>
        <p className='scroll-m-20 text-lg tracking-tight text-center text-slate-700 bg-slate-200 italic p-2 rounded sm:p-4 lg:text-2xl'>
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
