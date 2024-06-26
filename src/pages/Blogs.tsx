import { PageBodyLayout } from '@/components/common/PageBodyLayout'
import { Blog } from './Blog'
import * as BlogsJson from '../blogs.json'

export const Blogs = () => {
  return (
    <PageBodyLayout pageName='Blog'>
      <div className='grid grid-cols-1 gap-4 px-4 py-2 overflow-y-scroll md:grid-cols-2 md:gap-2 lg:grid-cols-4 lg:gap-2'>
        {BlogsJson.blogs.map((blog) => {
          return <Blog blogData={blog} />
        })}
      </div>
    </PageBodyLayout>
  )
}
