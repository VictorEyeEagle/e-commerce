import React from 'react'
import Header from '@/app/components/header'
import Produto from '@/app/components/produto'
import Tendencia from '../components/tendencia'

function PagProduto() {
  return (
    <div className="container">
      <Header />
      <Produto />
      <Tendencia />
    </div>
  )
}

export default PagProduto
