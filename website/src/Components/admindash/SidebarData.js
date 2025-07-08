import React from "react";
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'

export const SidebarData = [
    {
        title:'Home',
        path:'/home',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text' 
    },
    {
        title:'Register',
        path: '/report',
        icon: <IoIcons.IoIosPaper/>,
        cName: 'nav-text' 
    },
    {
        title:'Users',
        path:'/',
        icon: <FaIcons.FaCartPlus/>,
        cName: 'nav-text' 
    },
    {
        title:'Complaints',
        path:'/',
        icon: <FaIcons.FaCartPlus/>,
        cName: 'nav-text' 
    },
]

