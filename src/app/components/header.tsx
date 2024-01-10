import Image from 'next/image'
import logo from './estilos/Logo-ecommerce.png'
import { Button, Badge, IconButton } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./estilos/Header.css"
import Link from 'next/link';

function Header() {
  return (
    <header className="topo">
      <Link href="\"><Image className='logo' src={logo} alt="Logo" /></Link>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <input type="text" className='pesquisar' placeholder='Pesquisar na e-commerce' />
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <Link href="\carrinho"><IconButton className='carrinho' aria-label="show cart items" color="inherit">
        <Badge badgeContent={1} color="error">
          <ShoppingCartIcon sx={{ fontSize: 40 }} />
        </Badge>
      </IconButton></Link>
      <Link href="\loginregistro"><Button variant="contained" color="secondary">
        Logar
      </Button></Link>
    </header>
  )
}

export default Header
