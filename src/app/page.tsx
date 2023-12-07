import Image from 'next/image'
import logo from './Logo-ecommerce.png'
import "./Home.css"
import React from 'react'

export default function Home() {
  return (
    <div className="container">
      <header className="topo">
        <input className='pesquisar' placeholder='Pesquisar na e-commerce' />
        <Image src={logo} alt="Logo" width={500} height={300} />
        <span><p>carrinho</p></span>
      </header>
    </div>
  )
}
