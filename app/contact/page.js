import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from "./page.css";


const contact = () => {
  return (
    <div className="contact bg-[url('/backgrd.jpg')] bg-no-repeat bg-center bg-cover h-157">
        <div className='items-center flex justify-center p-4 '>
        <Image className="image rounded-full mix-blend-darken " src="/contact.png" alt="BitLinks Contact" width={100} height={100} />
        <h1 className='head font-bold text-5xl text-blue-800 text-center text-shadow-gray-500-500 text-shadow-lg -mt-2'>Contact Us</h1>
        </div>
        <p className='para text-center gap-2 p-4 justify-center w-200 m-auto text-2xl font-serif'>
            We’d love to hear from you! At BitLinks, your feedback, questions, and suggestions help us improve our services and deliver a better experience.
            </p>
        <p className='para text-center gap-2 p-4 justify-center w-200 m-auto text-2xl font-serif'>
            Whether you need support, have a feature request, or just want to learn more about how BitLinks works, feel free to reach out. Our team is always ready to assist you and ensure your link-shortening experience is smooth and reliable.
            </p>
        <p className='para text-center gap-2 p-4 justify-center w-200 m-auto text-2xl font-serif'>
            You can contact us using the below, and we’ll get back to you as soon as possible.
            </p>
        <div>
            <div className='items-center flex justify-center'>
             <Image className="rounded-full mix-blend-darken " src="/phone.png" alt="Phone" width={50} height={50} />   
            <p className='text-center text-2xl font-bold text-gray-600 py-4'>Phone No.- 8953963064</p>
            </div>
            <div className='items-center flex justify-center'>
            <Image className=" mix-blend-darken" src="/mail.png" alt="Email" width={50} height={50} />   
            <Link href="/Mail" target='_blank'><button className='justify-center shadow-lg rounded-lg font-bold bg-gray-600 text-white p-3 mx-3 my-2 text-2xl font-sans'>Mail us</button></Link>
            </div>
        </div>
      
    </div>
  )
}

export default contact
