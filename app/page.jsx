'use client'
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Homepage = () => {
    console.log('hi server component');
    const router = useRouter();

    console.log(router)

  return (
    <>
    <div className='text-4xl '>page</div>
    <Link href={{
        pathname : 'properties',
        query : {id:'100'}
    }}>go to prop page</Link>
    <button onClick={ ()=> router.prefetch('/') } >
        go to home page by route
    </button>
    </>
  )
}

export default Homepage