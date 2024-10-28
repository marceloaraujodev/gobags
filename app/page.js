import Image from "next/image";
import CarouselImgs from "./components/CarouselImgs/CarouselImgs";
import Hero from "./components/Hero/Hero";
import Process from "./components/Process/Process";
import c from "./page.module.css";

export default function Home() {
  return (
    <div className={c.pageCont}>
      <div className={c.carouselCont}>
        <CarouselImgs />
        <Hero />
        <Process />
      </div>
    </div>
  );
}
