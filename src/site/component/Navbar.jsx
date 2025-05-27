import React from 'react'
import Logo from '../../assets/temp_logo.png'

export default function Navbar() {
return (
    <nav>
        <div className='flex flex-row items-center justify-between gap-2 p-4 bg-primary border-b-2 border-accent-main'>
            <a className='p-2 flex flex-row gap-2 items-center justify-between'>
                <img alt='logo.png' src={Logo} className='h-10 w-10'/>
                <h1 className='font-bold text-lg text-accent-main'>Void Store</h1>
            </a>

            <div className='flex flex-row justify-between gap-4 text-accent-white font-bold'>
                <a href='/'>Products</a>
                <a href='/'>Contact</a>
                <a><i class="fa-solid fa-user"></i></a>
            </div>
        </div>
    </nav>
)
}
