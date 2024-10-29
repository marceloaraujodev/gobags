"use client";
import { useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import Modal from '../../components/Modal/Modal.jsx';
import "rsuite/dist/rsuite.css";
import c from "./Process.module.css";

export default function Process({setIsModalOpen, setContent}) {


  const images = [
    { src: "/grid-img-1.webp", text: "Desing", description: 'Da imaginação até a elaboração da peça piloto, nossa equipe de design cuida dos mínimos detalhes de cada peça. Clique nas fotos para conhecer um pouco mais sobre o nosso processo de Design.', modalImgs: ['/design.webp', '/design.webp','/design.webp','/design.webp','/design.webp','/design.webp',] },
    { src: "/grid-img-2.webp", text: "Materiais", description: 'Na indústria da moda os materiais são a alma de qualquer produto. A GO Bags só trabalha com materiais que atendem aos mais rigorosos padrões internacionais de qualidade, a começar pelos couros. Temos uma ampla gama de materiais que permitem a composição de coleções que vão das mais clássicas às mais arrojadas. Clique nas fotos para conhecer um pouco mais sobre os materiais que utilizamos.', modalImgs: ['/design.webp', '/design.webp','/design.webp','/design.webp','/design.webp','/design.webp'] },
    { src: "/grid-img-3.webp", text: "Cores", modalImgs: '/design.webp' },
    { src: "/grid-img-4.webp", text: "Ferragens e Detalhes", modalImgs:'/design.webp' },
    { src: "/grid-img-5.webp", text: "Acabamento", modalImgs: '/design.webp' }
  ];

  // function openModal(index) {
  //   handleOpen();
  // }

  return (
    <div className={c.cont}>
      {/* <Modal /> */}
      <h1 className={c.title}>Nosso Processo</h1>

      <div className={c.wrapper}>

        <div className={c.imgCont}>
          {images.map((image, index) => {
            // create separate controles for each image
            const overlayAnimation = useAnimationControls();
            const imgBlurAnimation = useAnimationControls();
            const textAnimation = useAnimationControls();

            // create separate animations for each image
            const handleHoverStart = () => {
              imgBlurAnimation.start({ filter: "blur(5px)" });
              overlayAnimation.start({ y: "0%", opacity: 1 });
              textAnimation.start({ opacity: 1 });
            };

            const handleHoverEnd = () => {
              textAnimation.start({ opacity: 0 });
              imgBlurAnimation.start({ filter: "blur(0px)" });
              overlayAnimation.start({ y: "100%", opacity: 0 });
            };

            return (
              // for a link wrappe the whole thing
              <motion.div 
                key={index} 
                onMouseEnter={handleHoverStart} 
                onMouseLeave={handleHoverEnd} 
                className={c.img}
              >
                <motion.img
                  src={image.src}
                  alt={`image grid ${index + 1}`}
                  initial={{ filter: "blur(0px)" }}
                  animate={imgBlurAnimation}
                  transition={{ duration: 0.5 }}
                  className={c.img}
                />

                <motion.div
                  key={index}
                  className={c.effect}
                  initial={{ y: "100%", opacity: "0" }}
                  animate={overlayAnimation}
                  transition={{ duration: 0.5 }}>
                  <motion.p
                   key={index}
                    className={c.overlayText}
                    initial={{ opacity: 0 }}
                    animate={textAnimation}
                    transition={{ duration: 0.3, delay: 0.5 }} // delay for the text
                    onClick={() => {
                      setIsModalOpen(true)
                      setContent(
                        <>
                        {image.modalImgs.map((image, index) => {
                          return <div className={c.modalDiv} key={index}>
                            <img src={image} alt={`image ${index + 1}`} />
                          </div>
                        })}
                        <p>{image.description}</p>
                        </>
                      ) 
                      
                    }}
                    >
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
