import { PageBodyLayout } from '@/components/common/PageBodyLayout'
import { HomeLeft } from '@/components/home/HomeLeft'
import { HomeRight } from '@/components/home/HomeRight'

export const HomePage = () => {
  return (
    <PageBodyLayout className='flex bg-[#f0f0f0]'>
      <HomeLeft />
      <HomeRight />
    </PageBodyLayout>
  )
}
