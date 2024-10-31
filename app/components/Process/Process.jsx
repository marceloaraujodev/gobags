"use client";
import { useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import "rsuite/dist/rsuite.css";
import c from "./Process.module.css";

export default function Process({ setIsModalOpen, setContent, setModalCategory, setFullScreenModalImages, setFullScreenModalIndex, setFullScreenModalImagesText }) {

  const handleImageClick = (modalImgs, index, modalImgsText) => {
    setFullScreenModalImages(modalImgs);
    setFullScreenModalIndex(index);
    setFullScreenModalImagesText(modalImgsText);
  };

  const images = [
    {
      src: "/grid-img-1.webp",
      text: "Desing",
      description:
        "Da imaginação até a elaboração da peça piloto, nossa equipe de design cuida dos mínimos detalhes de cada peça. Clique nas fotos para conhecer um pouco mais sobre o nosso processo de Design.",
      modalImgs: [
        "/113b92_1b99690f88e649e1a331055d1bd65a4c~mv2.webp",
        "/design.webp",
        "/113b92_0c9dbf42198c49c99d55907433923083~mv2.webp",
        "/113b92_75125a50d3cd4273a3162e215fd87581~mv2.webp",
        "/113b92_95ce1060b9f24880a36399be5a2c68d5~mv2.webp",
        "/113b92_e5de06d4bbe14ab5ad7a8cbc1bd42843~mv2.webp",
        "/113b92_684ba63deb2a4e1bb9c89c9ed2927ac4~mv2.webp",
        "/113b92_24273969a9294ef39e595c2fe8e303a9~mv2.webp",
        "/113b92_aacee1ad5ca1471f8968e2823a5e10f8~mv2.webp",
      ],
      modalImgsText: [
        'A Go Bags assiste seu processo de design desde o conceito inicial.', 'Colocamos seu design na mão de especialistas nas mesas de fábrica.', 'Sugerimos alterações objetivas e aprofundamos detalhamentos reais do projeto.', 'Assistimos as provas de conceito e revisamos as viabilidades físicas do seu projeto.', 'A Go Bags pode, inclusive, auxiliar as marcas na criação de detalhes.', 'Estamos sempre atentos às tendências mais sutis do design internacional de moda.', 'E fazemos com que seu produto final adquira um perfil sofisticado e diferente do panorama de mercado.', 'Podemos buscar combinações inesperadas de elementos, para a composição de produtos para diversos nichos.', 'E sempre buscamos combinações diferentes, que conjugam qualidade com aquele efeito de novidade, que move a indústria da moda.'
      ]
    },
    {
      src: "/grid-img-2.webp",
      text: "Materiais",
      description:
        "Na indústria da moda os materiais são a alma de qualquer produto. A GO Bags só trabalha com materiais que atendem aos mais rigorosos padrões internacionais de qualidade, a começar pelos couros. Temos uma ampla gama de materiais que permitem a composição de coleções que vão das mais clássicas às mais arrojadas. Clique nas fotos para conhecer um pouco mais sobre os materiais que utilizamos.",
      modalImgs: [
        "/113b92_75125a50d3cd4273a3162e215fd87581~mv2.webp",
        "/113b92_ef39257ad0434b47841283db41965941~mv2.webp",
        "/113b92_9190ebb821e04f26a274d02d9e637679~mv2.webp",
        "/113b92_ae8419c577bc46d1b6493c422cc0a870~mv2.webp",
        "/113b92_d24d720144bc4166966f85ced1ed829d~mv2.webp",
        "/113b92_ab195353788c4fcfb2873787c72a8a3a~mv2.webp",
      ],
      modalImgsText: [
        'Materiais de qualidade e bons controles de qualidade são a base do serviço da Go Bags.', 'A Go Bags trabalha com os mesmo couros - de excelente procedência - utilizados pelas grifes internacionais de alto luxo. O que faz tanta diferença nos seus projetos mais clássicos e sofisticados, como faz nos projetos daquelas marcas.', 'E também estamos sempre atentos aos tratamentos especiais e tecnologias do passado e do futuro, que podem trazer aquele toque a mais de sofisticação e modernidade revisitada.', 'Para aqueles projetos mais "trendy", a Go Bags traz combinações inusitadas, para além das expectativas tradicionais.', 'Muitas vezes a chave para encontrar o "chic" - com qualidade - pode estar em materiais mais simples.', 'Saber reconhecer o fator "fashion", mesmo nessas combinações inusitadas de materiais, é um know how Go Bags.', 'E assim a beleza efêmera do tecido leve, o couro de boa densidade e ferragens no tom certo constróem produtos de sucesso.', 'Então, voltamos sempre à nobreza do couro de alta qualidade, que abraça de forma única os mais diversos acabamentos, além de representar, como nenhum outro, classe.'
      ]
    },
    {
      src: "/grid-img-3.webp",
      text: "Cores",
      description:
        "Cores geram sensações, percepções, emoções, e impressões. Nossa percepção associa cores a estações. A moda dita cores para as estações. A escolha das cores de uma linha de produtos é uma declaração, e por isso identifica. Na construção de qualquer coleção a escolha das cores utilizadas é sempre feita de forma criteriosa. Para conhecer um pouco mais sobre o papel das cores no nosso processo produtivo, clique nas fotos.",
      modalImgs: ["/cores-1.webp", "/cores-2.webp", "/cores-3.webp", "/cores-4.webp"],
      modalImgsText: [
        'A Go Bags também oferece cartelas que extrapolam as paletas de cor mais tradicionais.', '', '', 'Cada vez mais as grandes marcas internacionais trabalham cartelas extensas, que atendem a consumidores com gostos cada vez mais individualizados.',
      ]
    },
    {
      src: "/grid-img-4.webp",
      text: "Ferragens e Detalhes",
      description:
        "Elegantes, minimalistas, tecnológicas, maximalistas ou descoladas, as ferragens e fechos escolhidos dão o toque final na construção da personalidade do produto. A GO Bags oferece opções dos melhores fornecedores do planeta ou desenvolve peças únicas e personalizadas para os produtos de cada marca produzida. Clique nas fotos e conheça um pouco mais sobre as ferragens e fechos que utilizamos.",
      modalImgs: [
        "/ferragens-1.webp",
        "/ferragens-2.webp",
        "/ferragens-3.webp",
        "/ferragens-4.webp",
        "/ferragens-5.webp",
        "/ferragens-6.webp",
        "/ferragens-7.webp",
        "/ferragens-8.webp",
        "/ferragens-9.webp",
      ],
      modalImgsText: [
        'Ferragens acentuam a personalidade de um produto. E podem adicionar elegância e até luxo a um produto simples.', 'Mecanismos engenhosos são a diferença para um consumidor mais atento à "usabilidade" e acabam transferindo sofisticação.', 'São detalhes que causam grande impacto, quanto mais se misturam ao desenho do produto.', 'E se tornam ainda mais impressionantes quando aplicadas com atenção, relevância e combinadas de forma consistente.', 'O inédito e o excêntrico, quando aplicados de forma comedida mas representativa, atribuem valor.', 'E, simplesmente por serem peças inteligentes e inusitadas, as ferragens literalmente podem fazer um produto mudar de categoria.', 'E o clássico também pode ser usado de forma a manter funcionalidade e beleza ao mesmo tempo.', 'E a Go Bugs também produz peças personalizadas, que, por si só, já são únicas e distintas.', ''
      ]
    },
    {
      src: "/grid-img-5.webp",
      text: "Acabamento",
      description:
        "A Go Bags é o encontro da arte com tecnologias de ponta, onde o acabamento vai do início, na concepção ao fim do processo de confecção. E até além, inclui o desenho de embalagens e a experiência do consumidor.",
      modalImgs: [
        "/acabamento-1.webp",
        "/acabamento-2.webp",
        "/acabamento-3.webp",
        "/acabamento-4.webp",
        "/acabamento-5.webp",
      ],
      modalImgsText: [
        'Para a Go Bags, o acabamento é um atributo do produto finalizado e não só uma qualidade do objeto confeccionado. Mas tudo começa na arte do ofício.', 'A medida da qualidade é sempre a precisão das costuras, a atenção aos detalhes.', 'Então, apesar de ser uma fábrica moderna, com equipamentos de última geração, o alicerce da GoBags é uma mão-de-obra altamente qualificada, que mantêm vivas práticas artesanais centenárias e até milenares.', 'O acabamento se mede pelo avesso". A Go Bags se orgulha dos "detalhes invisíveis" feitos com amor e proficiência.', 'Para a Go Bags o acabamento é uma extensão da proficiência artesanal, que vai até o produto final e a experiência do consumidor. Por isso assiste até a produção de embalagens e gifts.'
      ]
    },
  ];


  const overlayAnimation = [];
  const imgBlurAnimation = [];
  const textAnimation = [];

  for (let i = 0; i < images.length; i++) {
    overlayAnimation.push(`useAnimationControls()`);
    imgBlurAnimation.push(`useAnimationControls()`);
    textAnimation.push(`useAnimationControls()`);
  }

  return (
    <div className={c.cont} id="process">

      <h1 className={c.title}>Nosso Processo</h1>

      <div className={c.wrapper}>
        <div className={c.imgCont}>
          {images.map((image, index) => {
            // create separate animations for each image
            const handleHoverStart = (index) => {
              imgBlurAnimation[index].start({ filter: "blur(5px)", opacity: 1 });
              overlayAnimation[index].start({ y: "0%", opacity: 1 });
              textAnimation[index].start({ opacity: 1 });
            };

            const handleHoverEnd = (index) => {
              textAnimation[index].start({ opacity: 0 });
              imgBlurAnimation[index].start({ filter: "blur(0px)" });
              overlayAnimation[index].start({ y: "100%", opacity: 0 });
            };

            return (
              // for a link wrappe the whole thing
              <motion.div 
               key={index}
               onMouseEnter={() => handleHoverStart(index)} 
               onMouseLeave={() => handleHoverEnd(index)}
               className={c.img}>
                <motion.img
                  src={image.src}
                  alt={`image grid ${index + 1}`}
                  initial={{ filter: "blur(0px)" }}
                  animate={imgBlurAnimation[index]}
                  transition={{ duration: 0.5 }}
                  exit={{ opacity: 0 }}
                  className={c.img}
                />

                <motion.div
                  key={`${image.src}-overlay`}
                  className={c.effect}
                  initial={{ y: "100%", opacity: "0" }}
                  animate={overlayAnimation[index]}
                  transition={{ duration: 0.5 }}
                  exit={{ opacity: 0 }}
                  >
                    
                  <motion.p
                    key={`${image.src}-text`}
                    className={c.overlayText}
                    initial={{ opacity: 0 }}
                    animate={textAnimation[index]}
                    // transition={{ duration: 0.3, delay: 0.5 }} 
                    exit={{ opacity: 0 }}
                    onClick={() => {
                      setIsModalOpen(true);
                      setModalCategory(image.text);
                      setContent(
                        <>
                          {image.modalImgs.map((modalImage, imgIndex) => {
                            return (
                              <div key={modalImage}>
                                <img
                                  src={modalImage}
                                  alt={`image ${index + 1}`}
                                  onClick={() => handleImageClick(image.modalImgs, imgIndex, image.modalImgsText)}
                                />
                              </div>
                            );
                          })}
                          <p>{image.description}</p>
                        </>
                      );
                    }}>
                    {image.text}
                  </motion.p>
                </motion.div>
              </motion.div>
            );
          })}

          <div className={c.img}>
            <p className={c.text}>
              Toda Bolsa GO Bags é a soma de esforços em várias frentes: uma criação detalhada, a criteriosa seleção de
              materiais e paletas de corres, a escolha minuciosa de ferragens com qualidade e detalhes únicos, e a
              confecção final com padrões artesanais e tecnologias de ponta tipicamente reservadas para produtos de alto
              luxo. Tudo é pensado e executado para entregar valor para nossos clientes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
