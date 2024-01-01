import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Rating from '@mui/material/Rating'
import "./estilos/produto.css"

interface Produto {
    _id: string;
    imagemUrl: string;
    nome: string;
    preco: number;
    descricao: string;
}

function ProdutoRender() {
    const router = useRouter()
    const { id } = router.query

    const [produto, setProduto] = useState<Produto | null>(null)

    useEffect(() => {
        const fetchProduto = async () => {
            const res = await fetch(`/api/mongodb/BuscarIDproduto/${id}`)
            const data: Produto = await res.json()
            setProduto(data)
        }

        if (id) {
            fetchProduto()
        }
    }, [id])

    if (!produto) {
        return <div>Carregando...</div>
    }

    return (
        <main>
            <h1>Produto</h1>
            <div className='produtodetail'>
                <img className='foto-info' src={produto.imagemUrl} alt={produto.nome} />
                <div className='informacoes-produto'>
                    <h2 className='nome-produto-info'>{produto.nome}</h2>
                    <Rating className='rating-info' name={`rating-${produto._id}`} defaultValue={4.5} precision={0.5} readOnly />
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

export default ProdutoRender
