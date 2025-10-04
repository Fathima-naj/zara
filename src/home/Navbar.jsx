import { Menu, Search, ShoppingBag } from 'lucide-react'
import React from 'react'

function Navbar() {
  return (
    <div className='sticky top-0 mt-3 '>
      <nav className='d-flex '>
        <div className='hidden md:flex '>
            <div className='flex'>
                <span className='ml-12 mt-12'>
                    <Menu className=' text-gray-600' size={43}/>
                </span>
                
                <span className='ml-16'><img src='https://static.zara.net/assets/public/1868/0697/eef04c818f0e/a50a80c8a64d/50th-anniversary-light-0.svg?ts=1747392117461' className='w-50 h-50'/>
                
</span>
            </div>

        <div className=' ml-auto'>
            <input
            type='text'
            placeholder='Search'
            className='border-b  mt-3 mr-16 pl-2 pr-2'
            />
            <Search className='md:hidden '/>
            <span className='mr-16 mt-3 text-gray-600'>LOG IN</span>
            <span className='mr-16 mt-3 text-gray-600'>HELP</span>
            <span className='mr-16 mt-3 text-gray-600'>SHOPPING BAG[0]</span>
        </div>
                </div>

              
        <div className='md:hidden sm:d-flex flex'>
            
                <span className='ml-2 mt-3'>
                    <Menu className=' text-gray-600' size={20}/>
                </span>
                
                <span className='ml-2'><img src='https://static.zara.net/assets/public/1868/0697/eef04c818f0e/a50a80c8a64d/50th-anniversary-light-0.svg?ts=1747392117461' className='w-30 h-30'/>
                
</span>
           

      
            <Search className='ml-auto mr-3 mt-3 text-gray-600 '/>
            <span className='mr-3 mt-3 text-gray-600'>LOG IN</span>
            <span className='mr-3 mt-3 text-gray-600'><ShoppingBag/></span>
     
     </div>
      </nav>
    </div>
  )
}

export default Navbar
