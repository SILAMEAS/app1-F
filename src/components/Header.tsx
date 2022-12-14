import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <div className='w-full h-[10vh] bg-blue-400'>
        <div className='flex justify-between items-center h-full px-5'>
           
             <h1 className='text-white font-bold text-xl '>Nav</h1>
             <ul className='flex'>
                <li className='text-white mr-3 cursor-pointer'>Home</li>
                <li className='text-white mr-3 cursor-pointer'>Content</li>
                <li className='text-white mr-3 cursor-pointer'>About us</li>
             </ul>
           
        </div>
    </div>
  )
}

export default Header