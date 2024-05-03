import { PageBodyLayout } from '@/components/common/PageBodyLayout'
import { useTheme } from '@/hooks/useTheme'
import { HomeLeft } from '@/components/home/HomeLeft'
import { HomeRight } from '@/components/home/HomeRight'

export const HomePage = () => {
  const { theme } = useTheme()
  return (
    <PageBodyLayout className='flex'>
      <HomeLeft theme={theme} />
      <HomeRight />
    </PageBodyLayout>
  )
}
