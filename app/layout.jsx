import React from 'react'
import '@/assets/styles/globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AuthProvider from '@/components/AuthProvider'

export const metadata = {
  title: 'Property Hub',
  keywords: 'HakYam real estate',
  description: 'find your real estate in Berlin'
}

const MainLayout = ({children}) => {
  return (
    <AuthProvider>
    <html>
    <body>
        <main>
        <Navbar/>
           {children}
        </main>
        <Footer />
    </body>
    </html>
    </AuthProvider>
  )
}

export default MainLayout