import {
  NavigationMenu,
  NavigationMenuList,
} from '@radix-ui/react-navigation-menu'
import { NavLink } from 'react-router-dom'
import { ModeToggle } from './common/ModeToggle'
import { Home, BookOpenText, Code } from 'lucide-react'

type Props = {
  theme?: string
}

export const Navbar = ({ theme }: Props) => {
  const classList = `p-1 rounded-full border shadow-2xl w-[250px] dark:bg-[#1f2937]`
  const activeClassList = `border-b pb-1 ${
    theme === 'light' ? 'border-black' : 'border-white'
  }`
  return (
    <NavigationMenu className={classList}>
      <NavigationMenuList className='flex items-center justify-evenly'>
        <NavLink
          to='/'
          className={({ isActive }) => (isActive ? activeClassList : undefined)}
        >
          <Home />
        </NavLink>
        <NavLink
          to='/blog'
          className={({ isActive }) => (isActive ? activeClassList : undefined)}
        >
          <BookOpenText />
        </NavLink>
        <NavLink
          to='/projects'
          className={({ isActive }) => (isActive ? activeClassList : undefined)}
        >
          <Code />
        </NavLink>
        <ModeToggle />
      </NavigationMenuList>
    </NavigationMenu>
  )
}
