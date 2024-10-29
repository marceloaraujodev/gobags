'use client';
import { useState } from "react";
import Modal from "./components/Modal/Modal";
import CarouselImgs from "./components/CarouselImgs/CarouselImgs";
import Hero from "./components/Hero/Hero";
import Process from "./components/Process/Process";
import Marcas from "./components/Marcas/Marcas";
import c from "./page.module.css";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [content, setContent] = useState(""); 
  return (
    <>
    <Modal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      
    >{content}</Modal>
    <div className={c.pageCont}>
      <div className={c.carouselCont}>
        <CarouselImgs />
        
      </div>
        <Hero />
        <Process isModalOpen={isModalOpen} 
        setIsModalOpen={setIsModalOpen} 
        setContent={setContent}
        />
        <Marcas />
    </div>
    </>
  );
}
