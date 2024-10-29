import { motion, useAnimationControls } from 'framer-motion';
import c from './Marcas.module.css';

export default function Marcas({ setIsModalOpen, setContent }) {
  const infos = [
    {
      href: 'https://www.instagram.com/anahickmannluxury/',
      imgSrc: '/BannerAna.webp',
      title: 'Ana Hickmann',
      description:
        'Já tem produtos campeões em vendas em diversas categorias. O recente lançamento da assinatura das bolsas produzidas pela Go Bags trazem detalhes só encontrados em artigos de luxo: costuras decorativas digitais de alta precisão, bordas italianas, metais personalizados, couros mais duros e materiais nobres, para um mercado  emergente.',
    },
    {
      href: 'https://www.dumond.com.br/bolsas',
      imgSrc: '/BannerDrummond.webp',
      title: 'Bolsas Dummond',
      description:
        'Marca estabelecida no mercado de sapatos e acessórios femininos, a Dumond traz uma gama de produtos com posicionamento intermediário em franca expansão. A Go Bags desenvolve as bolsas da marca, que excedem as características do segmento e são uma entrega de valor excepcional para o consumidor final, nessa faixa de preço.',
    },
    {
      href: 'https://www.instagram.com/attosmilanooficial/',
      imgSrc: '/BannerAttos.webp',
      title: 'Attos Milano',
      description:
        'Marca européia de alto luxo, a Attos tem seus produtos próprios produzidos pela Go Bags desde a fundação, em 2006. São centenas de ítens postos à prova nos mercados mais competitivos da moda de alto nível do mundo. Além da fabricação, a Go Bags oferecem esse mesmo know how de alto nível para as marcas no mercado nacional.',
    },
  ];

  return (
    <div className={c.container}>
      <div className={c.marcas}>
        {infos.map((info, index) => {
          const animationOverlay = useAnimationControls();
          const imgBlurAnimation = useAnimationControls();
          const textAnimation = useAnimationControls();
          // active animation where you view the effects
          const handleHoverStart = () => {
            // individual animations
            animationOverlay.start({
              y: '0%',
              opacity: 1,
              borderRadius: '20px',
              top: '0',
              transition: {
                duration: 0.5,
                ease: 'easeInOut',
              },
            });
            imgBlurAnimation.start({
              filter: 'blur(5px)',
              transition: {
                duration: 0.5,
                ease: 'easeInOut',
                delay: 0.2,
              },
            });
            textAnimation.start({
              y: '0%',
              opacity: 1,
              transition: {
                duration: 0.5,
                ease: 'easeInOut',
              },
            });
          };

          // Here you reset the animation to is default view
          const handleHoverEnd = () => {
            animationOverlay.start({
              y: '100%',
              opacity: 0,
              top: '100%',
              borderRadius: '20px',
              transition: {
                duration: 0.5,
                ease: 'easeInOut',
              },
            });
            imgBlurAnimation.start({
              filter: 'blur(0px)',
              transition: {
                duration: 0.5,
                ease: 'easeInOut',
              },
            });
          };

          return (
            <motion.div
              className={c.img}
              key={index}
              onMouseEnter={handleHoverStart}
              onMouseLeave={handleHoverEnd}
              onClick={() => setIsModalOpen(false)}
              transition={{ duration: 0.3 }}>
              <a href={info.href} target="_blank">
                <motion.img
                  className={c.img}
                  animate={imgBlurAnimation}
                  src={info.imgSrc}
                  alt="Marca 1"
                />
                {/* top layer effect */}
                <motion.div className={c.effect} animate={animationOverlay}>
                  {/* when active this will appear */}
                  <motion.div
                    className={c.text}
                    initial={{ opacity: 0 }}
                    animate={textAnimation}>
                    <p className={c.title}>{info.title}</p>
                    <p>{info.description}</p>
                  </motion.div>
                </motion.div>
              </a>
            </motion.div>
          );
        })}

        <div className={c.rightBox}>
          <h2>Nossas Marcas</h2>
          <p>
            A GO Bags tem marcas próprias onde emprega todo o how-how e os
            serviços que ofereçe. Elas são a prova consistente de que o conceito
            funciona da concepção à entrega para o consumo final. Além de
            demonstrar o compromisso da Go Bags com o modelo do trabalho que
            executa.
          </p>
        </div>
      </div>
    </div>
  );
}
