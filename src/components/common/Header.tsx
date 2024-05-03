import { Navbar } from '../Navbar'

export const Header = () => {
  const classList = `flex justify-center absolute bottom-0 w-full h-[12%] sm:relative sm:h-[10%]`
  return (
    <div className={classList}>
      <Navbar />
    </div>
  )
}
