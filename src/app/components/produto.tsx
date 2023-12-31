import React from 'react'
import "./estilos/produto.css"
import Rating from '@mui/material/Rating'


function Produto() {

    return (
        <main>
            <h1>Produto</h1>
            <div className='produtodetail'>
                <img className='foto-info' src='https://images.tcdn.com.br/img/img_prod/633596/kit_40_cuecas_boxer_men_kit_atacado_kit_revenda_343_1_20200209134533.jpg' />
                <div className='informacoes-produto'>
                    <h2 className='nome-produto-info'>KIT COM 10 CUECAS</h2>
                    <Rating className='rating-info' name={`rating-{}`} defaultValue={4.5} precision={0.5} readOnly />
                    <p className='avaliacoes-info'>150 Avaliações</p>
                    <p className='vendidos-info'>350 Vendidos</p>
                    <p className='preco-info'>R$30,90</p>
                    <p className='frete-info'>calcular frete<input className='frete-campo' placeholder='CEP' /><button><p className='frete-botao'>Calcular</p></button></p>
                    <p className='quantidade-info'>quantidade<input type='number' className='quantidade-num' /></p>
                    <button className='comprar-agora-info'><p>Comprar Agora</p></button>
                    <button className='add-carrinho-info'><img className='carrinho-img' src='https://cdn-icons-png.flaticon.com/128/3825/3825056.png' /><p>Adicionar ao Carrinho</p></button>
                </div>
            </div>
            <div className='desc-produto'>
                <h3>descrição do produto</h3>
                <p>Um kit de 10 cuecas</p>
            </div>
        </main>
    )
}

export default Produto