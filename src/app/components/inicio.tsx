import React from 'react'
import "./estilos/inicio.css"
import Link from 'next/link'
import Rating from '@mui/material/Rating'

function Inicio() {
    return (
        <main>
            <div className='categoriatitle'><h1>CATEGORIAS</h1></div>
            <div className="categorias">
                <button>
                    <div className='cat'>
                        <img className='img-cat' src='https://images.tcdn.com.br/img/img_prod/1189051/noticia_76899846563fcffa696315.png' />
                        <p>Roupas Femininas</p>
                    </div>
                </button>
                <button>
                    <div className='cat'>
                        <img className='img-cat' src='https://i.pinimg.com/564x/48/92/4d/48924da959fadbb0608dd292a6e9a533.jpg' />
                        <p>Roupas Masculinas</p>
                    </div>
                </button>
                <button>
                    <div className='cat'>
                        <img className='img-cat' src='https://i.pinimg.com/236x/c9/8c/78/c98c7841d8fb239b37f1cc8b9998b8e1.jpg' />
                        <p>Moda <br />Infantil</p>
                    </div>
                </button>
                <button>
                    <div className='cat'>
                        <img className='img-cat' src='https://down-br.img.susercontent.com/file/f24bda8fdba15c39d6361a5981b02df5' />
                        <p>Calçados</p>
                    </div>
                </button>
                <button>
                    <div className='cat'>
                        <img className='img-cat' src='https://img.elo7.com.br/product/main/3CEBAA4/gargantilha-dourada-coracao-bijuterias-acessorios-femininos-colar.jpg' />
                        <p>Acessórios</p>
                    </div>
                </button>
                <button>
                    <div className='cat'>
                        <img className='img-cat' src='https://img.freepik.com/fotos-premium/uma-colecao-de-produtos-de-beleza-de-alta-qualidade-para-maquiagem-incluindo-diversas-ferramentas-e-acessorios_908985-71413.jpg' />
                        <p>Beleza e Cuidados Pessoais</p>
                    </div>
                </button>
                <button>
                    <div className='cat'>
                        <img className='img-cat' src='https://d3alv7ekdacjys.cloudfront.net/Custom/Content/Products/11/73/1173272_caixa-de-som-jbl-flip-6-bluetooth-ip67-preto-bivolt-ms_m5_637858763676686791.jpg' />
                        <p>Eletrônicos</p>
                    </div>
                </button>
                <button>
                    <div className='cat'>
                        <img className='img-cat' src='https://s3-sa-east-1.amazonaws.com/triider-prd-blog-files/wp-content/uploads/2019/06/06142234/4-dicas-de-decoracao-rustica-nichos-min.jpg' />
                        <p>Casa e Decoração</p>
                    </div>
                </button>
                <button>
                    <div className='cat'>
                        <img className='img-cat' src='https://portalvidalivre.com/uploads/content/image/52899/AdobeStock_146326567.jpeg' />
                        <p>Esportes e Fitness</p>
                    </div>
                </button>
                <button>
                    <div className='cat'>
                        <img className='img-cat' src='https://www.bienaldolivrojf.com.br/wp-content/uploads/2023/06/Fotos-10-livros-coloridos-mesa-iniciante.webp' />
                        <p>Livros</p>
                    </div>
                </button>
                <button>
                    <div className='cat'>
                        <img className='img-cat' src='https://cdn.awsli.com.br/1832/1832576/produto/90434038/7cb41e42cf.jpg' />
                        <p>Brinquedos</p>
                    </div>
                </button>
                <button>
                    <div className='cat'>
                        <img className='img-cat' src='https://www.cqlab.com.br/imagens/servicos/alimentos-bebidas-01.jpg' />
                        <p>Alimentos e Bebidas</p>
                    </div>
                </button>
                <button>
                    <div className='cat'>
                        <img className='img-cat' src='https://www.petz.com.br/blog//wp-content/uploads/2021/11/enxoval-para-gato-Copia.jpg' />
                        <p>Pet Shop</p>
                    </div>
                </button>
                <button>
                    <div className='cat'>
                        <img className='img-cat' src='https://galeriadocampus.com.br/wp-content/uploads/2020/08/escolar-lucropapelaria-280319.jpg' />
                        <p>Papelaria</p>
                    </div>
                </button>
                <button>
                    <div className='cat'>
                        <img className='img-cat' src='https://resource.logitech.com/content/dam/gaming/en/products/pro-x/pro-headset-gallery-1.png' />
                        <p>Áudio</p>
                    </div>
                </button>
                <button>
                    <div className='cat'>
                        <img className='img-cat' src='https://www.pensepneus.com.br/media/catalog/product/cache/ff61517d26ace703648229d56c081b52/p/n/pneu_michelin_aro_18_265-60_r18_110h_ltx_force_-_original_chevrolet_s10_e_trailblazer_padr_o_.png' />
                        <p>Automotivo</p>
                    </div>
                </button>
                <button>
                    <div className='cat'>
                        <img className='img-cat' src='https://m.media-amazon.com/images/I/51M6C02w4FL._AC_UF1000,1000_QL80_.jpg' />
                        <p>Relógios</p>
                    </div>
                </button>
                <button>
                    <div className='cat'>
                        <img className='img-cat' src='https://as1.ftcdn.net/v2/jpg/05/69/64/56/1000_F_569645682_VqzQ69Ff7n25RTBxO1OP8fE6V7Fjzf29.jpg' />
                        <p>Jogos e Consoles</p>
                    </div>
                </button>
            </div>


            <div className='tendencia'><h1>TENDÊNCIAS DO DIA</h1></div>
            <div className='produtos'>
                {[...Array(20)].map((_, index) => (
                    <div key={index} className='produto'>
                        <Link href={`/pages/pagproduto`}>
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

export default Inicio