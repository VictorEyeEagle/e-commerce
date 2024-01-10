import React from 'react';
import Rating from '@mui/material/Rating';
import styles from "./estilos/carrinhost.module.css"
import Button from '@mui/material/Button';

function Carrinho() {
    return (
        <div className={styles.container}>
            <h1 className={styles.titulo}>Carrinho</h1>
            <div className={styles.conteudo}>
                <div className={styles.produto}>
                    <img className={styles.imagem} />
                    <div className={styles.detalhes}>
                        <h2 className={styles.nome}>nome</h2>
                        <Rating defaultValue={4.5} precision={0.5} readOnly />
                        <p className={styles.avaliacoes}>150 Avaliações</p>
                        <p className={styles.vendidos}>350 Vendidos</p>
                        <p className={styles.preco}>R$</p>
                        <div className={styles.quantidade}>
                            <input type='number' className={styles.input} />
                            <Button className={styles.botao} variant="contained" color="secondary">Remover</Button>
                        </div>
                    </div>
                </div>
                <div className={styles.resumo}>
                    <h2 className={styles.subtitulo}>Resumo do Pedido</h2>
                    <div className={styles.subtotal}>
                        <p className={styles.texto}>Subtotal:</p>
                        <p className={styles.valor}>R$</p>
                    </div>
                    <div className={styles.frete}>
                        <p className={styles.texto}>Frete:</p>
                        <p className={styles.valor}>R$</p>
                    </div>
                    <div className={styles.total}>
                        <p className={styles.texto}>Total:</p>
                        <p className={styles.valor}>R$</p>
                    </div>
                    <Button className={styles.botao} variant="contained" color="primary">Finalizar Compra</Button>
                </div>
            </div>
        </div>
    )
}

export default Carrinho;
