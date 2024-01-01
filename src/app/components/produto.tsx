import { usePathname, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Rating from '@mui/material/Rating';
import "./estilos/produto.css";

interface IProduto {
    imagemUrl: string;
    nome: string;
    preco: number;
    descricao: string;
}

export default function ProdutoRender() {
    const [produto, setProduto] = useState<IProduto | null>(null);
    const pathname = usePathname();
    const searchParams = useSearchParams();

    let id: string | null = null;
    if (searchParams) {
        id = searchParams.get('id');
    }

    useEffect(() => {
        const fetchProduto = async () => {
            if (id) {
                const res = await fetch(`/api/mongodb/buscarid?id=${id}`);
                const data: IProduto = await res.json();
                console.log(data);
                setProduto(data);
            }
        };

        fetchProduto();
    }, [id]);

    if (!produto) {
        return <div>Carregando...</div>;
    }

    return (
        <main>
            <h1>Produto</h1>
            <div className='produtodetail'>
                <img className='foto-info' src={produto.imagemUrl} />
                <div className='informacoes-produto'>
                    <h2 className='nome-produto-info'>{produto.nome}</h2>
                    <Rating className='rating-info' defaultValue={4.5} precision={0.5} readOnly />
                    <p className='avaliacoes-info'>150 Avaliações</p>
                    <p className='vendidos-info'>350 Vendidos</p>
                    <p className='preco-info'>R${produto.preco}</p>
                    <p className='frete-info'>calcular frete<input className='frete-campo' placeholder='CEP' /><button><p className='frete-botao'>Calcular</p></button></p>
                    <p className='quantidade-info'>quantidade<input type='number' className='quantidade-num' /></p>
                    <button className='comprar-agora-info'><p>Comprar Agora</p></button>
                    <button className='add-carrinho-info'><img className='carrinho-img' src='https://cdn-icons-png.flaticon.com/128/3825/3825056.png' /><p>Adicionar ao Carrinho</p></button>
                </div>
            </div>
            <div className='desc-produto'>
                <h3>descrição do produto</h3>
                <p>{produto.descricao}</p>
            </div>
        </main>
    )
}
