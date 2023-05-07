import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Contact from './Contact'
import Links from './Links'

interface ILayout {
    children:React.ReactNode
}

export default function Layout({children}:ILayout) {
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
