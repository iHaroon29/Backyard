import { useLocation, useNavigate } from 'react-router-dom'
import Markdown from 'react-markdown'
import { PageBodyLayout } from '@/components/common/PageBodyLayout'
import { useEffect, useState } from 'react'
import { Loader } from '@/components/common/Loader'
import { Button } from '@/components/ui/button'

export const BlogPage = () => {
  const location = useLocation()
  const naivagate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [markdown, setMarkdown] = useState(null)
  const slug = location.pathname.split('/').slice(-1)

  useEffect(() => {
    import(`../markdown/${slug}.md`).then((data) => {
      setMarkdown(data.default)
      setLoading(false)
    })
  }, [])

  return (
    <PageBodyLayout className='overflow-y-scroll p-2'>
      <div>
        <Button
          variant={'ghost'}
          onClick={() => naivagate(-1)}
          className='p-2 rounded bg-white dark:bg-black'
        >
          Back
        </Button>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <Markdown className='prose p-2 m-auto shadow rounded-xl mt-4'>
          {markdown}
        </Markdown>
      )}
    </PageBodyLayout>
  )
}
