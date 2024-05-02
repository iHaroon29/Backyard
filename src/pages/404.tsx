import { PageBodyLayout } from '@/components/common/PageBodyLayout'

export const NotFoundPage = () => {
  return (
    <PageBodyLayout className='flex bg-white'>
      <div className='bg-[url(./assets/404.jpg)] w-full h-full bg-contain bg-no-repeat bg-center'></div>
    </PageBodyLayout>
  )
}
