'use client';
import { useState } from "react";
import Modal from "./components/Modal/Modal";
import CarouselImgs from "./components/CarouselImgs/CarouselImgs";
import Hero from "./components/Hero/Hero";
import Process from "./components/Process/Process";
import Marcas from "./components/Marcas/Marcas";
import PrivateLabel from "./components/PrivateLabel/PrivateLabel";
import VideoSection from "./components/VideoSection/VideoSection";
import FullScreenModal from './components/FullScreenModal/FullScreenModal';
import c from "./page.module.css";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fullScreenModalImages, setFullScreenModalImages] = useState([]);
  const [fullScreenModalIndex, setFullScreenModalIndex] = useState(0);
  const [fullScreenModalImagesText, setFullScreenModalImagesText] = useState("");
  const [content, setContent] = useState(""); 
  const [modalCategory, setModalCategory] = useState(""); // material, color, design

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        modalCategory={modalCategory}
      >{content}</Modal>

      <FullScreenModal
        images={fullScreenModalImages}
        initialIndex={fullScreenModalIndex}
        fullScreenModalImagesText={fullScreenModalImagesText}
        onClose={() => setFullScreenModalImages([])}
        isOpen={fullScreenModalImages.length > 0} // Determine if modal should be open
      />

      <div className={c.pageCont}>
        <div className={c.carouselCont}>
          <CarouselImgs />
        </div>
          <Hero />
          <Process isModalOpen={isModalOpen} 
            setIsModalOpen={setIsModalOpen} 
            setContent={setContent}
            setModalCategory={setModalCategory}
            setFullScreenModalImages={setFullScreenModalImages} // Pass setter for images
            setFullScreenModalIndex={setFullScreenModalIndex}
            setFullScreenModalImagesText={setFullScreenModalImagesText} // Pass setter for text content
          />
          <Marcas />
          <PrivateLabel />
          <VideoSection />
      </div>

    </>
  );
}
