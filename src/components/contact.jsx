import React from 'react'
import { HiOutlineMail } from 'react-icons/hi'
// import { RiContactsFill } from 'react-icons/ri'
import { FaGithub,FaLinkedin } from 'react-icons/fa'

export default function Contact() {
  return (
    <div name='contact' className='w-full bg-[#010021] flex justify-center items-start p-4'>
      <form action ='https://getform.io/f/574ccbf7-81da-4a18-b963-fe2110b42552'method='POST'className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-4 mb-2'>
          <p className='text-4xl font-bold inline border-b-4 border-green-600 text-gray-300'>Contact</p>
          <div className='text-[#a7a7a7] mt-2'>Kindly fill out the form below or shoot me an email to get in touch.</div>
        </div>
        
        <input className='bg-white p-2 type="text placeholder:text-gray-500' placeholder='Name' name='name' type='text'/>
        <input className='my-4 bg-white p-2 type="text placeholder:text-gray-500' placeholder='Email' name='email'type='text'/>
        <textarea className='bg-white p-2 placeholder:text-gray-500' name='message' rows='12' placeholder='Message'></textarea>
        <button className='text-white border-2 hover:bg-green-600 hover:border-green-600 px-4 py-2 mx-auto flex my-8'>Send Message</button>

        <div className='text-center justify-center flex'>
        <ul className='flex'>    
          <li className='mx-2 px-0 bg-blue-600 w-[40px] h-[40px] items-center justify-center flex rounded-md'><a href='https://linkedin.com/in/nzeamalu-nkechinyere-9b0476192'><FaLinkedin size={30} className='fill-white'/></a></li>
          
          {/* <li className='mx-2 px-0 bg-[#565f69] w-[40px] h-[40px] items-center justify-center flex rounded-md'><a href='/'><RiContactsFill size={30} className='fill-white'/></a></li>  */}

          <li className='mx-2 px-0 bg-red-600 w-[40px] h-[40px] items-center justify-center flex rounded-md'>
          <a href="mailto:nzeamalunkechinyere@gmail.com"><HiOutlineMail size={30}/></a></li> 

          <li className='mx-2 px-0 bg-white w-[40px] h-[40px] items-center justify-center flex rounded-md'><a href='https://github.com/terejoe'><FaGithub size={30}/></a>
          </li>    
        </ul>
      </div>
      </form>

    </div>
  )
}
