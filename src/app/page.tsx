import Image from 'next/image'
import logo from './Logo-ecommerce.png'
import "./Home.css"
import React from 'react'

export default function Home() {
  return (
    <div className="container">
      <header className="topo">
        <Image className='logo' src={logo} alt="Logo" />
        <input className='pesquisar' placeholder='Pesquisar na e-commerce' />
        <div className='carrinho'>
          <a href='www.youtube.com' className='carrinho-link'>
            <img className='carrinhoicon' src={"https://cdn-icons-png.flaticon.com/128/2098/2098575.png"} alt="Carrinho" />
            <p>carrinho</p>
          </a>
        </div>
      </header>
    </div>
  )
}
