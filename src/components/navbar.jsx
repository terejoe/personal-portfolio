import {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import codeIcon from '../assets/codeicon.png'
import { Link } from 'react-scroll';

export default function Navbar() {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center py-4 bg-[#010021] text-white'>
        <div className='px-2 ml-6'>
          <img src={codeIcon} alt ='Logo Icon'></img>
        </div>

        {/* Desktop Menu */}
        <ul className='hidden md:flex mr-20'>
          <li className='  hover:text-[#a7a7a7]'><Link  to="home" smooth={true} duration={500}>Home</Link></li>
          <li className='  hover:text-[#a7a7a7]'><Link  to="about" smooth={true} duration={500}>About</Link></li>
          <li className='  hover:text-[#a7a7a7]'><Link  to="projects" smooth={true} duration={500}>Projects</Link></li>
          <li className='  hover:text-[#a7a7a7]'><Link  to="contact" smooth={true} duration={500}>Contact</Link></li>
        </ul>
        
        
        {/* Hamburger Menu */}
        <div onClick = {handleClick} className='md:hidden z-10 px-2 cursor-pointer mr-4'>
          {!nav ? <FaBars size={35}/> : <FaTimes size={35}/>}
        </div>

        {/* Hamburger Menu Items */}
        <ul className = {!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#010021] flex flex-col justify-center items-center'}>
          <li className='py-6 text-4xl'><Link onClick = {handleClick} to="home" smooth={true} duration={500}>Home</Link></li>
          <li className='py-6 text-4xl'><Link onClick = {handleClick} to="about" smooth={true} duration={500}>About</Link></li>
          <li className='py-6 text-4xl'><Link onClick = {handleClick} to="projects" smooth={true} duration={500}>Projects</Link></li>
          <li className='py-6 text-4xl'><Link onClick = {handleClick} to="contact" smooth={true} duration={500}>Contact</Link></li>
        </ul>
        
    </div>
  )
}
