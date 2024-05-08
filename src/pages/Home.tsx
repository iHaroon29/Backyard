import { PageBodyLayout } from '@/components/common/PageBodyLayout'
import { HomeLeft } from '@/components/home/HomeLeft'
import { HomeRight } from '@/components/home/HomeRight'

export const HomePage = () => {
  return (
    <PageBodyLayout className='flex'>
      <HomeLeft />
      <HomeRight />
    </PageBodyLayout>
  )
}
