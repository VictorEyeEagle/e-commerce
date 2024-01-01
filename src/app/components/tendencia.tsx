"use client"

import React from 'react'
import "./estilos/tendencias.css"
import Link from 'next/link'
import Rating from '@mui/material/Rating'
import { useState, useEffect } from 'react';

interface Produto {
    _id: string;
    imagemUrl: string;
    nome: string;
    preco: number;
    descricao: string;
}


function Tendencia() {
    const [produtos, setProdutos] = useState<Produto[]>([]); // async pra buscar os produtos no DB

    useEffect(() => {
        const fetchProdutos = async () => {
            const res = await fetch('/api/mongodb/buscarproduto');
            const data = await res.json();
            setProdutos(data);
        };

        fetchProdutos();
    }, []);

    return (
        <main>
            <div className='tendencia'><h1>TENDÊNCIAS DO DIA</h1></div>
            <div className='produtos'>
                {produtos.map((produto, index) => (
                    <div key={index} className='produto'>
                        <Link href={`/pagproduto/${produto._id}`}>
                            <img className='img-produto' src={produto.imagemUrl} alt={`Produto ${index + 1}`} />
                            <p>{produto.nome}</p>
                            <p className='preco'>R${produto.preco}</p>
                            <Rating className='classif' name={`rating-${index}`} defaultValue={4.5} precision={0.5} readOnly />
                            <p className='vendidos'>{Math.floor(Math.random() * 1000)} vendidos</p>
                        </Link>
                    </div>
                ))}
            </div>
        </main>
    )
}

export default Tendencia