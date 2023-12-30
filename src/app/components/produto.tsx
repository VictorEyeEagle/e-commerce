import React from 'react'
import "./estilos/produto.css"
import Link from 'next/link'
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
                <p>Um kit de 10 cuecas oferece uma variedade de opções para o dia a dia, com peças confortáveis e funcionais. Geralmente feito de algodão ou outros materiais respiráveis, esse conjunto pode incluir diferentes estilos, como boxers, cuecas slip ou sungas, em cores e designs variados. Ideal para garantir conforto, suporte e praticidade ao longo da semana, é uma escolha prática para manter o armário bem abastecido com itens essenciais.Um kit de 10 cuecas oferece uma variedade de opções para o dia a dia, com peças confortáveis e funcionais. Geralmente feito de algodão ou outros materiais respiráveis, esse conjunto pode incluir diferentes estilos, como boxers, cuecas slip ou sungas, em cores e designs variados. Ideal para garantir conforto, suporte e praticidade ao longo da semana, é uma escolha prática para manter o armário bem abastecido com itens essenciais.Um kit de 10 cuecas oferece uma variedade de opções para o dia a dia, com peças confortáveis e funcionais. Geralmente feito de algodão ou outros materiais respiráveis, esse conjunto pode incluir diferentes estilos, como boxers, cuecas slip ou sungas, em cores e designs variados. Ideal para garantir conforto, suporte e praticidade ao longo da semana, é uma escolha prática para manter o armário bem abastecido com itens essenciais.Um kit de 10 cuecas oferece uma variedade de opções para o dia a dia, com peças confortáveis e funcionais. Geralmente feito de algodão ou outros materiais respiráveis, esse conjunto pode incluir diferentes estilos, como boxers, cuecas slip ou sungas, em cores e designs variados. Ideal para garantir conforto, suporte e praticidade ao longo da semana, é uma escolha prática para manter o armário bem abastecido com itens essenciais.Um kit de 10 cuecas oferece uma variedade de opções para o dia a dia, com peças confortáveis e funcionais. Geralmente feito de algodão ou outros materiais respiráveis, esse conjunto pode incluir diferentes estilos, como boxers, cuecas slip ou sungas, em cores e designs variados. Ideal para garantir conforto, suporte e praticidade ao longo da semana, é uma escolha prática para manter o armário bem abastecido com itens essenciais.</p>
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