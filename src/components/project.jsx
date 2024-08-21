import tickety from '../assets/tickety.png'
import instagram from '../assets/instagram.png'
import budget from '../assets/budget.png'

export default function Project() {
  return (
    <div name ='projects' className='w-full pt-40 bg-[#010021] text-gray-300'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-6'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-green-600'>Projects</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 mx-auto'>
          {/* One Item */}
          <div className='border-lg shadow-lg shadow-black container rounded-md justify-center items-center max-w-sm overflow-hidden'>
            <a href=' https://eduford-schoolwebsite.netlify.app'><img src={tickety} alt='Website' className='w-full'/></a>
            <div className='px-6 py-4'>
              <p className='font-bold text-gray-500 text-xl mb-2'>Event Mangement System</p>
              <ul>
                <li><strong><a href='https://github.com/asmaaHamdym/Tickety'className='hover:text-green-300'>View Code</a></strong></li>
                <li><strong><a href=' https://tickety-group10.netlify.app/' className='hover:text-green-300'>View Website</a></strong></li>
              </ul>
            </div>
          </div>

          <div className='border-lg shadow-lg shadow-black container rounded-md justify-center items-center max-w-sm overflow-hidden'>
            <a href='https://instagram-react-app.netlify.app/'><img src={instagram} alt='Website' className='w-full'/></a>
            <div className='px-6 py-4'>
              <p className='font-bold text-gray-500 text-xl mb-2'>Instagram App Clone</p>
              <ul>
                <li><strong><a href='https://github.com/terejoe/instagram-app' className='hover:text-green-300'>View Code</a></strong></li>
                <li><strong><a href='https://instagram-react-app.netlify.app/' className='hover:text-green-300'>View Website</a></strong></li>
              </ul>
            </div>
          </div>

          <div className='border-lg shadow-lg shadow-black container rounded-md justify-center items-center max-w-sm overflow-hidden'>
            <a href='https://budget-and-expenses-applicatin.netlify.app/'><img src={budget} alt='Website' className='w-full'/></a>
            <div className='px-6 py-4'>
              <p className='font-bold text-gray-500 text-xl mb-2'>Budget App</p>
              <ul>
                <li><strong><a href='https://github.com/terejoe/budget-app' className='hover:text-green-300'>View Code</a></strong></li>
                <li><strong><a href='https://budget-and-expenses-applicatin.netlify.app/' className='hover:text-green-300'>View Website</a></strong></li>
              </ul>
            </div>
          </div>

        </div>
      </div>


    </div>
  )
}
