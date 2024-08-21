import tickety from '../assets/tickety.png'
import max from '../assets/max.png'
import budget from '../assets/budget.png'

export default function Project() {
  return (
    <div name ='projects' className='w-full pt-20 md:pt-40 bg-[#010021] text-gray-300'>
      <div className='md:pl-40 p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-6'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-green-600'>Projects</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 md:gap-20 gap-10 mx-auto'>
          {/* One Item */}
          <div className='border-lg shadow-lg shadow-black container rounded-md justify-center items-center md:w-[350px] overflow-hidden'>
            <a href=' https://tickety-group10.netlify.app/'><img src={tickety} alt='Website' className='w-full'/></a>
            <div className='px-6 py-2'>
              <p className='font-bold text-gray-500 text-xl mb-2'>Event Mangement System</p>
              <p className='text-white text-sm mb-2'>An event management system that you can create and view events.</p>
              <div className='flex justify-between'>
                <div><strong><a href='https://github.com/asmaaHamdym/Tickety'className='hover:text-green-300'>View Code</a></strong></div>
                <div><strong><a href=' https://tickety-group10.nedivfy.app/' className='hover:text-green-300'>View Website</a></strong></div>
              </div>
            </div>
          </div>

          <div className='border-lg shadow-lg shadow-black container rounded-md justify-center items-center md:w-[350px] overflow-hidden'>
            <a href='https://kellslte-portfolio.netlify.app/'><img src={max} alt='Website' className='w-full'/></a>
            <div className='px-6 py-2'>
              <p className='font-bold text-gray-500 text-xl mb-2'>Max's Portfolio</p>
              <p className='text-white text-sm mb-2'>Built a client's personal porfolio while displaying blogposts from hashnode on the website using graphql.</p>
              <div className='flex justify-between'>
                <div><strong><a href='https://github.com/terejoe/max-portfolio' className='hover:text-green-300'>View Code</a></strong></div>
                <div><strong><a href='https://kellslte-portfolio.netlify.app/' className='hover:text-green-300'>View Website</a></strong></div>
              </div>
            </div>
          </div>

          <div className='border-lg shadow-lg shadow-black container rounded-md justify-center items-center md:w-[350px] overflow-hidden'>
            <a href='https://budget-and-expenses-applicatin.netlify.app/'><img src={budget} alt='Website' className='w-full'/></a>
            <div className='px-6 py-2'>
              <p className='font-bold text-gray-500 text-xl mb-2'>Budget App</p>
              <p className='text-white text-sm mb-2'>A budget app that calulates the expenses of the user.</p>
              <div className='flex justify-between'>
                <div><strong><a href='https://github.com/terejoe/budget-app' className='hover:text-green-300'>View Code</a></strong></div>
                <div><strong><a href='https://budget-and-expenses-applicatin.netlify.app/' className='hover:text-green-300'>View Website</a></strong></div>
              </div>
            </div>
          </div>

        </div>
      </div>


    </div>
  )
}
