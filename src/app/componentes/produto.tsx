import React from 'react'
import "./estilos/produto.css"
import Link from 'next/link'
import Rating from '@mui/material/Rating'

function Produto() {
    return (
        <main>

            <h1>Produto</h1>
            <div className='produtodetail'>
                <img className='produtodetail-foto ' src='https://images.tcdn.com.br/img/img_prod/633596/kit_40_cuecas_boxer_men_kit_atacado_kit_revenda_343_1_20200209134533.jpg' />
            </div>

            <div className='tendencia'><h1>TENDÊNCIAS DO DIA</h1></div>
            <div className='produtos'>
                {[...Array(20)].map((_, index) => (
                    <div key={index} className='produto'>
                        <Link href={`/pagproduto`}>
                            <div className='link-produto'>
                                <img className='img-produto' src='https://images.tcdn.com.br/img/img_prod/633596/kit_40_cuecas_boxer_men_kit_atacado_kit_revenda_343_1_20200209134533.jpg' alt={`Produto ${index + 1}`} />
                                <p>KIT COM 10 CUECAS</p>
                                <p className='preco'>R$30,90</p>
                                <Rating className='classif' name={`rating-${index}`} defaultValue={4.5} precision={0.5} readOnly />
                                <p className='vendidos'>350 vendidos</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>


        </main>
    )
}

export default Produto