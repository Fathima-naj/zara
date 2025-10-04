import React from 'react'
import Navbar from './Navbar'
import { ChevronRight } from 'lucide-react'

function Home() {

  return (
    <div>
      <Navbar/>
      <div className='ml-12 mr-12 mt-3 d-flex flex flex-col items-center justify-center '>
        <div className='flex '>
            <img src='https://static.zara.net/assets/public/e4d5/4255/405644b790c3/6787b47cf9ad/06318286700-p/06318286700-p.jpg?ts=1759241003116&w=1644&f=auto'
            className='sm:w-auto md:w-auto  md:h-screen sm:h-50'
            />
           
        </div>
        <div className=''>
            <img src='https://static.zara.net/photos///assets/public/d75a/077b/3ece4db5a78f/c6a6b2be56e3//svg-landscape-fit-26eb872e-216c-4d2d-8bd3-74cfc975acaa-default.svg?ts=1759398909722'
            className=' w-auto h-screen'/>
        </div>

      </div>
    </div>
  )
}

export default Home
