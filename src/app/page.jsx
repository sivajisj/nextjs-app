import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.png";
import Button from "@components/Button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.texts}>
        <h1 className={styles.title}>Better design for your digital products.</h1>
        <p className={styles.desc}>
          Turning your ideas into Reality. We bring together the team from the global tech industry.
        </p>
        <Button  url="/portfolio" text="See Our Works"/>
      </div>

      <div className={styles.item}>
        <div className={styles.imgContainer}>
          <Image src={Hero} className={styles.img} alt="hero image" />
        </div>
      </div>
    </div>
  );
}
