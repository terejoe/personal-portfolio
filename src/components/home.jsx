import {HiArrowNarrowRight} from 'react-icons/hi'
import handEmoji from '../assets/handemoji.png'
import frontEnd from '../assets/frontend.png'
import { Link } from 'react-scroll';

export default function Home() {
  return (
    <div name = 'home' className='w-full bg-[#010021]'>

      {/* Container */}
      <div className='max-w-[800px] mx-2 md:mx-10 md:px-8 flex justify-center text-left flex-col h-full md:pt-40 pt-24 pb-6'>
        <p className='text-2xl text-[#a7a7a7]'><img src={handEmoji} alt = 'Hand Emoji' className='inline mr-2 mt-[-4px]'></img>Hi, My name is</p>
        <h1 className = 'text-4xl sm:text-7xl font-bold text-[#ffffff] ml-1' data-aos="fade-right" data-aos-duration="3000" >Nzeamalu Nkechinyere Tere-joe</h1>
        <img src={frontEnd} alt='Front-end Logo' className = 'mt-4 ml-2 w-[160px] h-[38px]' data-aos="fade-right" data-aos-duration="3000" data-aos-delay="200"/>
        <p className='py-2 text-[#a7a7a7] ml-3' data-aos="fade-right" data-aos-duration="3000" data-aos-delay="400">JavaScript / React / TailwindCSS</p>

        <div className='ml-3'data-aos="fade-right" data-aos-duration="3000" data-aos-delay="600">
          <Link  to="projects" smooth={true} duration={500}><button className='text-white group border-2 px-6 py-3 flex items-center my-2 hover:bg-green-600 hover:border-green-600'>My Projects<span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight className='ml-3'/></span></button></Link>
        </div>
      </div>
    </div>
    
  )
}
