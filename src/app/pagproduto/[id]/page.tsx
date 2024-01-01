"use client"

import React from 'react'
import Header from '@/app/components/header'
import ProdutoRender from '@/app/components/produto'
import Tendencia from '../../components/tendencia'

function PagProduto() {
  return (
    <div className="container">
      <Header />
      <ProdutoRender />
      <Tendencia />
    </div>
  )
}

export default PagProduto
