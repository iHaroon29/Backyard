import {
  NavigationMenu,
  NavigationMenuList,
} from '@radix-ui/react-navigation-menu'
import { NavLink } from 'react-router-dom'
import { ModeToggle } from './common/ModeToggle'
import { Home, BookOpenText, CodeXml } from 'lucide-react'

export const Navbar = () => {
  const classList = `nav flex items-center w-full h-full sm:relative sm:w-[250px] sm:rounded-full light:bg-[#030711]`
  const baseClass = 'p-2'
  const activeClassList = ` text-white bg-[#030711] rounded-xl dark:bg-white dark:text-black`
  return (
    <NavigationMenu className={classList}>
      <NavigationMenuList className='grid grid-flow-col grid-cols-4 justify-items-center h-full content-center'>
        <NavLink
          to='/'
          className={({ isActive }) =>
            isActive ? baseClass + activeClassList : baseClass
          }
        >
          <Home size={32} />
        </NavLink>
        <NavLink
          to='/blogs'
          className={({ isActive }) =>
            isActive ? baseClass + activeClassList : baseClass
          }
        >
          <BookOpenText size={32} />
        </NavLink>
        <NavLink
          to='/projects'
          className={({ isActive }) =>
            isActive ? baseClass + activeClassList : baseClass
          }
        >
          <CodeXml size={32} />
        </NavLink>
        <ModeToggle />
      </NavigationMenuList>
    </NavigationMenu>
  )
}
