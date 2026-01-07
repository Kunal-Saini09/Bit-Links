"use client"
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'

const Shorten = () => {
    const [url, seturl] = useState("")
    const [shorturl, setshorturl] = useState("")
    const [generated, setgenerated] = useState("")
    
    const generate=()=>{    
        const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "url": url,
  "shorturl": shorturl
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("/api/generate", requestOptions)
  .then((response) => response.json())
  .then((result) => {
    setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
    seturl("")
    setshorturl("")
    
    console.log(result)
    alert(result.message)
    })
  .catch((error) => console.error(error));
   
    }
    
  return (
    <div className='mx-auto max-w-lg bg-amber-170 my-16 p-8 rounded-lg shadow-lg flex
    flex-col gap-4'>
      <h1 className='font-bold text-2xl'>Generate your short url</h1>
      <div className='flex flex-col gap-2'>
        <input type="text" 
        value={url}
        className='p-4 bg-white rounded-md py-2'
        placeholder='Enter your URL' 
        onChange={(e)=>seturl(e.target.value)} />

        <input type="text" 
        value={shorturl}
        className='p-4 bg-white rounded-md py-2'
        placeholder='Enter your preferred short URL' 
        onChange={(e)=>setshorturl(e.target.value)} />
        <button onClick={generate}
        className='bg-amber-200 shadow-lg p-3 py-1 rounded-lg font-bold my-4'>Generate</button>
      </div>
      {generated && <>
      <span className='font-bold text-lg'>Your short URL is :</span>
      <code> 
        <Link target="_blank" href={generated} className='hover:text-red-700'>{generated}</Link>
        </code>
        </>}
    </div>
  )
}

export default Shorten
