import Image from "next/image";
import CarouselImgs from "./components/CarouselImgs/CarouselImgs";
import c from "./page.module.css";

export default function Home() {
  return (
    <div className={c.pageCont}>
      <div className={c.carouselCont}>
        <CarouselImgs />
      </div>
    </div>
  );
}
