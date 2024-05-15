import { Gamepad } from 'lucide-react'
import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Props = {
  children?: ReactNode
  blogData: Blog
}

type Blog = {
  title: string
  subTitle: string
  description: string
  wordCount: number
  thumbNail: string
  slug: string
  catergory: string
}

export const Blog = ({ blogData }: Props) => {
  return (
    <article className='rounded-lg bg-white p-4 shadow transition hover:shadow-lg sm:p-6'>
      <span className='inline-block  p-2 rounded'>
        <Gamepad size={24} />
      </span>

      <h3 className='mt-0.5 text-lg font-medium text-gray-900'>
        {blogData.title}
      </h3>

      <p className='mt-2 line-clamp-3 text-sm/relaxed text-gray-500'>
        {blogData.description.slice(0, 40) + '...'}
      </p>

      <Link
        to={'./' + blogData.slug}
        className='group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600'
      >
        Find out more
        <span
          aria-hidden='true'
          className='block transition-all group-hover:ms-0.5 rtl:rotate-180'
        >
          &rarr;
        </span>
      </Link>
    </article>
  )
}
