import React from 'react'
import '@/assets/styles/globals.css'
import Navbar from '@/components/Navbar'


export const metadata = {
  title: 'Property Hub',
  keywords: 'HakYam real estate',
  description: 'find your real estate in Berlin'
}

const MainLayout = ({children}) => {
  return (
    <html>
    <body>
        <main>
        <Navbar/>
           {children}
        </main>
    </body>
    </html>
  )
}

export default MainLayout