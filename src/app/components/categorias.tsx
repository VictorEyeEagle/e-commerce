import React from 'react'
import "./estilos/categorias.css"

function Categorias() {

    const categorias = [
        {
            imgSrc: 'https://d2r9epyceweg5n.cloudfront.net/stores/002/043/732/products/2b5483da247813b6458752ec3fe62284-a4fe47dec0912f1ff216491791177845-640-0.jpg',
            nome: 'Roupas Femininas'
        },
        {
            imgSrc: 'https://i.pinimg.com/564x/48/92/4d/48924da959fadbb0608dd292a6e9a533.jpg',
            nome: 'Roupas Masculinas'
        },
        {
            imgSrc: 'https://i.pinimg.com/236x/c9/8c/78/c98c7841d8fb239b37f1cc8b9998b8e1.jpg',
            nome: 'Moda Infantil'
        },
        {
            imgSrc: 'https://down-br.img.susercontent.com/file/f24bda8fdba15c39d6361a5981b02df5',
            nome: 'Calçados'
        },
        {
            imgSrc: 'https://img.elo7.com.br/product/main/3CEBAA4/gargantilha-dourada-coracao-bijuterias-acessorios-femininos-colar.jpg',
            nome: 'Acessórios'
        },
        {
            imgSrc: 'https://img.freepik.com/fotos-premium/uma-colecao-de-produtos-de-beleza-de-alta-qualidade-para-maquiagem-incluindo-diversas-ferramentas-e-acessorios_908985-71413.jpg',
            nome: 'Beleza e Cuidados Pessoais'
        },
        {
            imgSrc: 'https://d3alv7ekdacjys.cloudfront.net/Custom/Content/Products/11/73/1173272_caixa-de-som-jbl-flip-6-bluetooth-ip67-preto-bivolt-ms_m5_637858763676686791.jpg',
            nome: 'Eletrônicos'
        },
        {
            imgSrc: 'https://s3-sa-east-1.amazonaws.com/triider-prd-blog-files/wp-content/uploads/2019/06/06142234/4-dicas-de-decoracao-rustica-nichos-min.jpg',
            nome: 'Casa e Decoração'
        },
        {
            imgSrc: 'https://portalvidalivre.com/uploads/content/image/52899/AdobeStock_146326567.jpeg',
            nome: 'Esportes e Fitness'
        },
        {
            imgSrc: 'https://www.bienaldolivrojf.com.br/wp-content/uploads/2023/06/Fotos-10-livros-coloridos-mesa-iniciante.webp',
            nome: 'Livros'
        },
        {
            imgSrc: 'https://cdn.awsli.com.br/1832/1832576/produto/90434038/7cb41e42cf.jpg',
            nome: 'Brinquedos'
        },
        {
            imgSrc: 'https://www.cqlab.com.br/imagens/servicos/alimentos-bebidas-01.jpg',
            nome: 'Alimentos e Bebidas'
        },
        {
            imgSrc: 'https://www.petz.com.br/blog//wp-content/uploads/2021/11/enxoval-para-gato-Copia.jpg',
            nome: 'Pet Shop'
        },
        {
            imgSrc: 'https://galeriadocampus.com.br/wp-content/uploads/2020/08/escolar-lucropapelaria-280319.jpg',
            nome: 'Papelaria'
        },
        {
            imgSrc: 'https://resource.logitech.com/content/dam/gaming/en/products/pro-x/pro-headset-gallery-1.png',
            nome: 'Áudio'
        },
        {
            imgSrc: 'https://www.pensepneus.com.br/media/catalog/product/cache/ff61517d26ace703648229d56c081b52/p/n/pneu_michelin_aro_18_265-60_r18_110h_ltx_force_-_original_chevrolet_s10_e_trailblazer_padr_o_.png',
            nome: 'Automotivo'
        },
        {
            imgSrc: 'https://m.media-amazon.com/images/I/51M6C02w4FL._AC_UF1000,1000_QL80_.jpg',
            nome: 'Relógios'
        },
        {
            imgSrc: 'https://as1.ftcdn.net/v2/jpg/05/69/64/56/1000_F_569645682_VqzQ69Ff7n25RTBxO1OP8fE6V7Fjzf29.jpg',
            nome: 'Jogos e Consoles'
        }
    ];

    return (
        <main>
            <div className='categoriatitle'><h1>CATEGORIAS</h1></div>
            <div className="categorias">
                {categorias.map((categoria, index) => (
                    <button key={index}>
                        <div className='cat'>
                            <img className='img-cat' src={categoria.imgSrc} />
                            <p>{categoria.nome}</p>
                        </div>
                    </button>
                ))}
            </div>
        </main>
    )
}

export default Categorias