import { HiOutlineMail } from 'react-icons/hi'
// import { RiContactsFill } from 'react-icons/ri'
import { FaGithub,FaLinkedin } from 'react-icons/fa'
import { useState } from 'react';
import axios from 'axios';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message:  ""
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value
    })
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('https://getform.io/f/574ccbf7-81da-4a18-b963-fe2110b42552', {
        headers: {
          "Content-Type": "application/json",
        },
        // body: JSON.stringify(formData)
      })
      .then((res) => {
        console.log(res);
        setFormData({ name: "", email: "", message:""});
      })
      .catch((err) => {
        console.log(err.res);
      });
  }
  return (
    <div name='contact' className='w-full bg-[#010021] justify-center items-start p-4 pt-20 '>
      <div className='pb-4 mb-2 text-center'>
        <p className='text-4xl font-bold inline border-b-4 border-green-600 text-gray-300'>Contact</p>
          <div className='text-[#a7a7a7] mt-2'>Kindly fill out the form below or shoot me an email to get in touch.</div>
      </div>
      <form onClick={handleSubmit} className='flex flex-col max-w-[600px] w-full justify-center mx-auto'>
        
        
        <input className='bg-white p-2 type="text placeholder:text-gray-500' placeholder='Name' name='name' type='text' value={formData.name} onChange={handleChange}/>
        <input className='my-4 bg-white p-2 type="text placeholder:text-gray-500' placeholder='Email' name='email'type="email" value={formData.email} onChange={handleChange}/>
        <textarea className='bg-white p-2 placeholder:text-gray-500' name='message' rows='12' placeholder='Message' value={formData.message} onChange={handleChange}></textarea>
        <button type= "submit" className='text-white border-2 hover:bg-green-600 hover:border-green-600 px-4 py-2 mx-auto flex my-8'>Send Message</button>
      </form>

      <div>
        <ul className='flex text-center justify-center'>    
          <li className='mx-2 px-0 bg-blue-600 w-[40px] h-[40px] items-center justify-center flex rounded-md'><a href='https://www.linkedin.com/in/nkechinyere-tere-joe-nzeamalu'><FaLinkedin size={30} className='fill-white'/></a></li>
          
          {/* <li className='mx-2 px-0 bg-[#565f69] w-[40px] h-[40px] items-center justify-center flex rounded-md'><a href='/'><RiContactsFill size={30} className='fill-white'/></a></li>  */}

          <li className='mx-2 px-0 bg-red-600 w-[40px] h-[40px] items-center justify-center flex rounded-md'>
          <a href="mailto:nzeamalunkechinyere@gmail.com"><HiOutlineMail size={30}/></a></li> 

          <li className='mx-2 px-0 bg-white w-[40px] h-[40px] items-center justify-center flex rounded-md'><a href='https://github.com/terejoe'><FaGithub size={30}/></a>
          </li>    
        </ul>
      </div>

    </div>
  )
}
