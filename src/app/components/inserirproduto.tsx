import React from 'react';
import "./estilos/inserirproduto.css"

function InserirProduto() {

  return (
    <div className='inserirvenda-info'>
      <h1>Inserir produto</h1>
      <form>
        <input type="text" placeholder="URL da Imagem" className='imagem-info inputs' /><br />
        <input placeholder="Nome" className='nome-info inputs' /><br />
        <input placeholder="Preço" className='preco-info inputs' /><br />
        <input placeholder="Descrição" className='desc-info inputs' /><br />
        <button type="submit" className='enviarvenda-info'>Publicar</button>
      </form>
    </div>
  );
}

export default InserirProduto;