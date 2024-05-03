import { Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTheme } from '@/hooks/useTheme'

type Props = {
  className?: string
}

export function ModeToggle({ className }: Props) {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  return (
    <Button
      variant='ghost'
      size='icon'
      onClick={toggleTheme}
      className={className}
    >
      {theme === 'light' ? <Sun size={32} /> : <Moon size={32} />}
      <span className='sr-only'>Toggle theme</span>
    </Button>
  )
}
