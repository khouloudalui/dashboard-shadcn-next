
"use client"
import {useState} from 'react'
import { Nav } from './ui/nav'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Props {}
import {
  ChevronRight,
    LayoutDashboard, 
    Settings,
    ShoppingCart,
    UsersRound,
  } from "lucide-react" 
import { Button } from './ui/button'

export const SideNavbar = ({}: Props) => {
  const [isCollapsed, setIsCollapsed] = useState(false)
  function toggleSidebar(){
    setIsCollapsed(!isCollapsed)
  }
    return (
        <div className='relative min-w-[80px] border-r px-3 pb-10 pt-24 '>
          <div className='absolute right-[-20px] top-7'>
          <Button variant="secondary" className='rounded-full p-2' onClick={toggleSidebar}>
<ChevronRight/>
          </Button>
          </div>
              <Nav
            isCollapsed={isCollapsed}
            links={[
              {
                title: "Dashboard",
                href:"/",
                label:"5",
                icon: LayoutDashboard,  
                variant: "default", 
              }, 
              {
                title: "Users",
                href:"/users",
                label:"8",
                icon: UsersRound,
                variant: "ghost",
              },
              {
                title: "Orders",
                href:"/oerders",
                label:"1",
                icon: ShoppingCart,
                variant: "ghost",
              },
              {
                title: "Settings",
                href:"/settings",
                label:"200",
                icon: Settings,
                variant: "ghost",
              },
            ]}
          />   
        </div>
    )
}
