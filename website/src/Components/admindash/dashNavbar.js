import React , {useState} from 'react'
import { Link } from 'react-scroll'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { SidebarData } from './SidebarData'
import './dashNavbar.css'
import {IconContext} from 'react-icons'

function DashNavbar() {
  const [sidebar,setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)

  return (
   <>
   <IconContext.Provider value={{color: 'white'}}>
    <div className='navbar'>
        
            <a class="button" href="">
                <img src="https://pbs.twimg.com/profile_images/378800000639740507/fc0aaad744734cd1dbc8aeb3d51f8729_400x400.jpeg"/>
            <div class="logout">LOGOUT</div>
            </a>
       
        <Link to='/' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar}/>
        </Link>
    </div>
    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
                <Link to='/dashhome' className='menu-bars'>
                    <AiIcons.AiOutlineClose/>
                </Link>
            </li>
            {SidebarData.map((item, index)=> {
                return (
                    <li key={index} className={item.cName} >
                        <Link to={item.path}>
                            {item.icon}
                            <span>{item.title}</span>
                        </Link>
                    </li>
                )
            })}
        </ul>
    </nav>
    </IconContext.Provider>
   </>
  )
}

export default DashNavbar