import React, { useState } from 'react';
import "./estilos/inserirproduto.css"

function InserirProduto() {
  const [produto, setProduto] = useState({
    imagemUrl: '',
    nome: '',
    preco: '',
    descricao: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduto({ ...produto, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(produto)

    // Enviar uma solicitação POST para a rota da API
    const res = await fetch('/api/mongodb/inserirproduto', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(produto),
    });

    if (res.ok) {
      const text = await res.text();
      if (text) {
        try {
          const data = JSON.parse(text);
          console.log(data.message);
        } catch (error) {
          console.error('Erro ao analisar JSON:', error);
        }
      } else {
        console.log('Resposta vazia');
      }
    } else {
      console.error('Erro na solicitação:', res.status, res.statusText);
    }
  }

  return (
    <div className='inserirvenda-info'>
      <h1>Inserir produto</h1>
      <form onSubmit={handleSubmit}>
        <input required type="text" name="imagemUrl" placeholder="URL da Imagem" className='imagem-info inputs' onChange={handleChange} /><br />
        <input required name="nome" placeholder="Nome" className='nome-info inputs' onChange={handleChange} /><br />
        <input required name="preco" placeholder="Preço" className='preco-info inputs' onChange={handleChange} /><br />
        <input required name="descricao" placeholder="Descrição" className='desc-info inputs' onChange={handleChange} /><br />
        <button type="submit" className='enviarvenda-info'>Publicar</button>
      </form>
    </div>
  );
}

export default InserirProduto;
