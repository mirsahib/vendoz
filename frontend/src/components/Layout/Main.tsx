import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Contact from '@/components/Contact'
import Links from '@/components/Links'

interface ILayout {
    children:React.ReactNode
}

export default function MainLayout({children}:ILayout) {
  return (
    <div>
        <Header />
        {children}
        <Contact/>
        <Links/>
        <Footer/>
    </div>
  )
}
