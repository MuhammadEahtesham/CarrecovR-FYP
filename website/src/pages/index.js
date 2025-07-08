import React, {useState} from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import Herosection from '../Components/Herosection'
import Infosection from '../Components/Infosection'
import Services from '../Components/Services'
import { homeObjOne, homeObjTwo, homeObjFour } from '../Components/Infosection/Data'
import Footer from '../Components/Footer'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }
  
  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Navbar toggle={toggle}/>
    <Herosection/>
    <Infosection {...homeObjOne}/>
    <Infosection {...homeObjTwo}/>
    <Services/>
    <Infosection {...homeObjFour}/>
    <Footer/>
    </>
  )
}

export default Home