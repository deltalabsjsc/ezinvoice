import { Menu as UikitMenu } from '@phamphu19498/pibridge_uikit'
import { createContext, useContext, useState } from 'react'
import { useLocation } from 'react-router-dom'
import config from './config'
import UserMenu from './UserMenu'
import { getActiveMenuItem, getActiveSubMenuItem } from './utils'

interface Props { 
  isOpen: true,
  setIsOpen: any
}

export const IsOpenPhisingWaringContext = createContext<Props | null>(null);

export function IsOpenProvider(props:any) {
  const [isOpen, setIsOpen] = useState(true);
    
  return <IsOpenPhisingWaringContext.Provider value={{isOpen, setIsOpen}} {...props} />
}


const Menu = (props:any) => {
  const location = useLocation()
  const pathname = location.pathname
  const activeMenuItem = getActiveMenuItem({ menuConfig: config(), pathname })
  const activeSubMenuItem = getActiveSubMenuItem({ menuItem: activeMenuItem, pathname })  
  return (
    <>
        <UikitMenu
            userMenu={<UserMenu/>}
            isDark={false}
            currentLang="en"
            links={config()}
            activeItem={activeMenuItem?.href}
            activeSubItem={activeSubMenuItem?.href}
            linkImages="/images/ImgPi/logo.png"
            profile={{
              username: "",
              image: "",
              profileLink: '/profile',
              noProfileLink: '/profile',
              showPip: "",
            }}
            {...props}
            bgColorMenu="#FFF8E7"
        />
    </>

  )
}

export default Menu
