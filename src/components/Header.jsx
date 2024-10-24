import React from 'react'
import profileImg from '../assets/images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between items-center p-4 mx-4 border-b-2 max-w-7xl mx-auto'>
            <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
            <img src={ profileImg } alt="" />
        </div>
    )
}

export default Header