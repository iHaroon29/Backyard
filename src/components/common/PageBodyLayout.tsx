import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
  className?: string
  pageName?: string
}
export const PageBodyLayout = ({ children, className, pageName }: Props) => {
  const classList = `w-full dark:bg-[#f0f0f0] bg-[#030711] rounded-md mx-auto mt-3 sm:mt-7 ${
    className ?? ''
  } w-[90%] h-[100%] sm:w-[80%]`

  return (
    <div className={classList}>
      {pageName ? (
        <h2 className='px-4 py-1 text-xl font-light tracking-tight text-center inline-block rounded ml-5 mt-5 mb-3 dark:bg-[#030711] bg-[#f0f0f0]'>
          {pageName}
        </h2>
      ) : null}
      {children}
    </div>
  )
}
