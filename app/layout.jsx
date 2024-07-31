import React from 'react'
import '@/assets/styles/globals.css'

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
           {children}
        </main>
    </body>
    </html>
  )
}

export default MainLayout