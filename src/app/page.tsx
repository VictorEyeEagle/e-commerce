import Image from 'next/image'
import logo from './Logo-ecommerce.png'
import "./Home.css"
import React from 'react'
import { Button, Badge, IconButton } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


export default function Home() {
  return (
    <div className="container">
      <header className="topo">
        <Image className='logo' src={logo} alt="Logo" />
        <input className='pesquisar' placeholder='Pesquisar na e-commerce' />
        <IconButton className='carrinho' aria-label="show cart items" color="inherit">
          <Badge badgeContent={1} color="error">
            <ShoppingCartIcon sx={{ fontSize: 40 }} />
          </Badge>
        </IconButton>
        <Button variant="contained" color="secondary">
          Logar
        </Button>
      </header>
    </div>
  )
}
