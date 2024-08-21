import { FaGithub, FaHtml5, FaCss3Alt,FaReact } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import potrait from '../assets/potrait.jpg'

export default function About() {
  return (
    <div name='about'className='w-full bg-[#010021] text-white pt-28'>
      <div className='flex flex-col justify-center items-center w-full h-full'>

        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-4'>
          <div className='sm:text-right pb-8 pl-4 pt-4'>
            <p className='text-4xl font-bold inline border-b-4 border-green-600'>About</p>
          </div>
        </div>

        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 px-4'>

          <div className='m-auto'>
            <img src={potrait} alt='Potrait' className='h-96 w-68'/>
          </div>

          <div className='mt-8 m-auto'>
            <p className='text-left text-4xl font-bold'>Hi, I'm Nkechinyere, It's so nice to meet you. Please take a look around.</p>
            <p className='mt-4 text-[#a7a7a7] text-left'>I am an enthusiastic front-end developer with excellent skills in my field. I take delight in developing clear and reusable code using frontend frameworks to create and maintain the client-side of a website that is user-friendly.</p>

            <div className='mt-4 text-center justify-center flex md:justify-start'>
              <p className='text-3xl'>Tools:</p>
              <ul className='flex mb-4'>    
                <li className='mx-2 px-0 bg-orange-600 w-[40px] h-[40px] items-center justify-center flex rounded-md'>
                  <FaHtml5 size={30}/>
                </li> 
                <li className='mx-2 px-0 bg-blue-600 w-[40px] h-[40px] items-center justify-center flex rounded-md'>
                  <FaCss3Alt size={30}/>
                </li> 
                <li className='mx-2 px-0 bg-[#f0db4f] w-[40px] h-[40px] items-center justify-center flex rounded-md'>
                  <IoLogoJavascript className='fill-[#323330]' size={30}/>
                </li> 
                <li className='mx-2 px-0 bg-blue-600 w-[40px] h-[40px] items-center justify-center flex rounded-md'>
                  <FaReact size={30}/>
                </li> 
                <li className='mx-2 px-0 bg-[#333333] w-[40px] h-[40px] items-center justify-center flex rounded-md'>
                  <FaGithub size={30}/>
                </li>     
              </ul>
            </div>

          </div>
        </div>

        
      </div>

    </div>
  )
}

 
