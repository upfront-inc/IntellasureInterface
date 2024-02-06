import React from 'react'
import '../Css/sidebar.css'
import { useSidebar } from '../Contexts/SidebarContext';


const SideBarComponent = () => {

  const { sidebarPosition } = useSidebar();

  console.log(sidebarPosition)

  return (
    <div className={`sidebar-${sidebarPosition}`}>
      <p>Hello</p>
    </div>
  )
}

export default SideBarComponent
