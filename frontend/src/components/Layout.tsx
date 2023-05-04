import React from 'react'
import Header from './Header'
import Footer from './Footer'

interface ILayout {
    children:React.ReactNode
}

export default function Layout({children}:ILayout) {
  return (
    <div>
        <Header />
        {children}
        <Footer/>
    </div>
  )
}
