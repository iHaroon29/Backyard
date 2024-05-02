import { useTheme } from '@/hooks/useTheme'
import { Navbar } from '../Navbar'

export const Header = () => {
  const { theme } = useTheme()
  const classList = `flex pt-4 justify-center text-lg`
  return (
    <div className={classList}>
      <Navbar theme={theme} />
    </div>
  )
}
