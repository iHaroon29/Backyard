import { useLocation } from 'react-router-dom'
import Markdown from 'react-markdown'
import { PageBodyLayout } from '@/components/common/PageBodyLayout'
import { useEffect, useState } from 'react'
import { Loader } from '@/components/common/Loader'

export const BlogPage = () => {
  const location = useLocation()
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
    <PageBodyLayout className='overflow-y-scroll'>
      {loading ? (
        <Loader />
      ) : (
        <Markdown className='prose w-full'>{markdown}</Markdown>
      )}
    </PageBodyLayout>
  )
}
