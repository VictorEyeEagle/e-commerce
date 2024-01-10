import React from 'react';
import Rating from '@mui/material/Rating';
import "./estilos/carrinhost.css"

function Carrinho() {
    return (
        <div className='container'>
            <h1 className='titulo'>Carrinho</h1>
            <div className='conteudo'>
                <div className='produto'>
                    <img className='imagem' />
                    <div className='detalhes'>
                        <h2 className='nome'>nome</h2>
                        <Rating defaultValue={4.5} precision={0.5} readOnly />
                        <p className='avaliacoes'>150 Avaliações</p>
                        <p className='vendidos'>350 Vendidos</p>
                        <p className='preco'>R$</p>
                        <div className='quantidade'>
                            <input type='number' className='input' />
                            <button className='botao'>Remover</button>
                        </div>
                    </div>
                </div>
                <div className='resumo'>
                    <h2 className='subtitulo'>Resumo do Pedido</h2>
                    <div className='subtotal'>
                        <p className='texto'>Subtotal:</p>
                        <p className='valor'>R$</p>
                    </div>
                    <div className='frete'>
                        <p className='texto'>Frete:</p>
                        <p className='valor'>R$</p>
                    </div>
                    <div className='total'>
                        <p className='texto'>Total:</p>
                        <p className='valor'>R$</p>
                    </div>
                    <button className='botao'>Finalizar Compra</button>
                </div>
            </div>
        </div>
    )
}

export default Carrinho;