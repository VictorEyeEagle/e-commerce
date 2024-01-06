import React from 'react'
import Header from './components/header'
import Categorias from './components/categorias'
import Tendencia from './components/tendencia'

function Home() {
  return (
    <div className="container">
      <Header />
      <Categorias />
      <Tendencia />
    </div>
  )
}

export default Home
