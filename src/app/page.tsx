import React from 'react'
import Header from './components/header'
import Inicio from './components/categorias'
import Tendencia from './components/tendencia'

function Home() {
  return (
    <div className="container">
      <Header />
      <Inicio />
      <Tendencia />
    </div>
  )
}

export default Home
