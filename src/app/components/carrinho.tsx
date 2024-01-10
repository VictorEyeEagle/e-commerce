import React from 'react';
import Rating from '@mui/material/Rating';
import "./estilos/carrinho.css"

export default function Carrinho() {
    return (
        <div className='container'>
            <h1 className='titulo'>Carrinho</h1>
            <div>
                <div>
                    <img />
                    <div>
                        <h2>nome</h2>
                        <Rating defaultValue={4.5} precision={0.5} readOnly />
                        <p>150 Avaliações</p>
                        <p>350 Vendidos</p>
                        <p>R$</p>
                        <div>
                            <input type='number' />
                            <button>Remover</button>
                        </div>
                    </div>
                </div>
                <div>
                    <h2>Resumo do Pedido</h2>
                    <div>
                        <p>Subtotal:</p>
                        <p>R$</p>
                    </div>
                    <div>
                        <p>Frete:</p>
                        <p>R$</p>
                    </div>
                    <div>
                        <p>Total:</p>
                        <p>R$</p>
                    </div>
                    <button>Finalizar Compra</button>
                </div>
            </div>
        </div>
    )
}
