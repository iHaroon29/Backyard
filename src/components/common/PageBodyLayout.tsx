import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
  className?: string
  pageName?: string
}
export const PageBodyLayout = ({ children, className, pageName }: Props) => {
  const classList =
    `w-full h-full bg-[#030711] sm:w-[80%] sm:mx-auto dark:bg-[#f0f0f0] sm:rounded-lg ` +
    (className ? className : '')

  return (
    <div className={classList}>
      {pageName ? (
        <h2 className='px-3 py-1 text-xl font-light tracking-tight inline-block rounded-md ml-4 mt-5 mb-3 bg-[#ffffff] dark:bg-[#030711]'>
          {pageName}
        </h2>
      ) : null}
      {children}
    </div>
  )
}
