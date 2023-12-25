import Image from 'next/image'
import logo from './Logo-ecommerce.png'
import { Button, Badge, IconButton } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./estilos/Header.css"

function Header() {
  return (
    <header className="topo">
      <Image className='logo' src={logo} alt="Logo" />
      <input type="text" className='pesquisar' placeholder='Pesquisar na e-commerce' />
      <IconButton className='carrinho' aria-label="show cart items" color="inherit">
        <Badge badgeContent={1} color="error">
          <ShoppingCartIcon sx={{ fontSize: 40 }} />
        </Badge>
      </IconButton>
      <Button variant="contained" color="secondary">
        Logar
      </Button>
    </header>
  )
}

export default Header
