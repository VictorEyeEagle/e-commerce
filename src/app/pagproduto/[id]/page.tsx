"use client"

import { useParams } from 'next/navigation';
import React from 'react';
import Header from '@/app/components/header';
import ProdutoRender from '@/app/components/produto';
import Tendencia from '../../components/tendencia';

function PagProduto() {
  const params = useParams();
  const id = params ? params['id'] as string : undefined;

  if (!id) {
    // Lidar com o caso em que 'id' não está definido
    return null;
  }

  return (
    <div className="container">
      <Header />
      <ProdutoRender id={id} />
      <Tendencia />
    </div>
  )
}


export default PagProduto;
