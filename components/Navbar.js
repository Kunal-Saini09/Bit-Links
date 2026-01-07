"use client"
import React from 'react'

import Link from 'next/link'
import Image from 'next/image'
import styles from "./navbar.css";
import { useState } from 'react';


const Navbar = () => {
  const [open, setOpen] = useState(false);

  const media= () => {
    setOpen(prev => !prev);
  };
return (
    <nav className='h-16 bg-amber-300 flex justify-between px-3 items-center text-shadow-white'>
        <div className="logo font-bold text-lg flex gap-2">
          <Image className="rounded-full mix-blend-darken" alt="Bit-Links Logo" src="/link.jpg" width={40} height={40}/>
            <Link href="/" className='my-2'>Bit-Links</Link>
        </div>
        <button className='menu hidden' onClick={media}><img src="/menubtn.png" alt="button" /></button>
        <ul className={`lnk ${open ? "open": ""}`}> 
            <Link className='hover:text-red-700' onClick={media} href="/"><li>Home</li></Link>
            <Link className='hover:text-red-700' onClick={media} href="/about"><li>About</li></Link>
            <Link className='hover:text-red-700' onClick={media} href="/shorten"><li>Shorten</li></Link>
            <Link className='hover:text-red-700' onClick={media} href="/contact"><li>Contact Us</li></Link>
            <li className='flex gap-3'>
                <Link onClick={media} href="/shorten"><button className='bg-amber-200 shadow-lg p-3 py-1 rounded-lg font-bold hover:bg-amber-400'>Try Now</button></Link>
                <Link onClick={media} target="_blank" href="/github"><button className='bg-amber-200 shadow-lg p-3 py-1 rounded-lg font-bold hover:bg-amber-400'>Github</button></Link>
            </li>
        </ul>
    </nav>
  )
}
export default Navbar

