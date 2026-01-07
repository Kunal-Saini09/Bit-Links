"use client"
import React from 'react'
import styles from "./page.css";

const About = () => {
  return (
    <div className="about bg-[url('/backgrd.jpg')] bg-no-repeat bg-center bg-cover h-157">
        <h1 className='head font-extrabold text-5xl text-amber-700 text-center p-4 text-shadow-lg'>About Bit-Links</h1>
        <p className=' para text-center gap-2 p-4 justify-center w-200 m-auto text-2xl font-serif'>BitLinks is a fast, simple, and reliable URL shortening platform designed to make sharing links easier and smarter. Whether you’re managing campaigns, sharing content on social media, or organizing long URLs, BitLinks helps you turn complex links into short, clean, and easy-to-share URLs in seconds.</p>

        <p className='para text-center gap-2 p-4 justify-center w-200 m-auto text-2xl font-serif'>Our platform focuses on speed, security, and ease of use. With BitLinks, users can shorten URLs effortlessly, track link performance, and manage links from a single dashboard. We aim to help individuals, creators, and businesses improve their online presence by making links more accessible and memorable.</p>

        <p className='para text-center gap-2 p-4 justify-center w-200 m-auto text-2xl font-serif'>At BitLinks, we believe that powerful tools don’t need to be complicated. Our mission is to simplify the way links are shared across the internet—one short link at a time.</p>
    </div>
  )
}

export default About
