import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.scss";
import SEO from "@/components/SEO";
import Layout from "@/components/Layout";
import CarouselComp from "@/components/Carousel";
import VideoPlayer from "@/components/VideoPlayer";
import { Gi3DHammer, GiSupersonicArrow } from "react-icons/gi";
import { FaBridgeWater } from "react-icons/fa6";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <SEO />
      <main className={styles.main}>
        {/* LANDING */}
        <section className={styles.landing}>
          {" "}
          <CarouselComp />
        </section>
        {/* INTRO */}
        <section className={styles.intro}>
          <VideoPlayer />
          <h3>
            Cultivating Male Leadership that Engenders Community Growth and
            Transformation{" "}
          </h3>
        </section>
        {/* STEPS */}
        <section className={styles.steps}>
          <div className={styles.box}>
            <Gi3DHammer />
            <div className={styles.container}>
              <h3 className={styles.header}>Build</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Asperiores minus illum aperiam velit voluptates nostrum harum
                eum odio?
              </p>
            </div>
          </div>
          <div className={styles.box}>
            <FaBridgeWater />
            <div className={styles.container}>
              <h3 className={styles.header}>Bridge</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Asperiores minus illum aperiam velit voluptates nostrum harum
                eum odio?
              </p>
            </div>
          </div>
          <div className={styles.box}>
            <GiSupersonicArrow />
            <div className={styles.container}>
              <h3 className={styles.header}>Become</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Asperiores minus illum aperiam velit voluptates nostrum harum
                eum odio?
              </p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

