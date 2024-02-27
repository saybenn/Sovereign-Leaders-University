import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";
import styles from "../styles/Carousel.module.scss";
import { images } from "@/utils/images";
import { useState } from "react";

function CarouselComp() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      onSelect={handleSelect}
      activeIndex={index}
      fade
      interval={5000}
      controls={false}
      indicators={false}
      className={styles.carousel}
    >
      {images.map((image, i) => (
        <Carousel.Item className={styles.carouselItem} key={i}>
          <Image
            fill
            className={styles.carouselImage}
            src={image.src}
            alt={image.alt}
          />
          <Carousel.Caption className={styles.carouselCaption}>
            <h2>Build Bridge Become</h2>
            <button>Call To Action</button>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
      {/* <Carousel.Item className={styles.nextImageContainer}>
        <Image
          fill
          className={styles.nextImage}
          src={images[0].src}
          alt={images[0].alt}
        />
      </Carousel.Item>
      <Carousel.Item className={styles.nextImageContainer}>
        <Image
          fill
          className={styles.nextImage}
          src={images[1].src}
          alt={images[1].alt}
        />
      </Carousel.Item>
      <Carousel.Item className={styles.nextImageContainer}>
        <Image
          fill
          className={styles.nextImage}
          src={images[2].src}
          alt={images[2].alt}
        />
      </Carousel.Item>
      <Carousel.Item className={styles.nextImageContainer}>
        <Image
          fill
          className={styles.nextImage}
          src={images[3].src}
          alt={images[3].alt}
        />
      </Carousel.Item> */}
    </Carousel>
  );
}

export default CarouselComp;
