import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Creative Innovators</h1>
          <h2 className={styles.imgDesc}>
            Crafting groundbreaking digital solutions
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            We are a team of dedicated professionals with a passion for creating exceptional digital experiences. 
            Our mission is to provide innovative solutions that captivate and engage our audience.
             We take pride in our work and are committed to excellence.
            <br />
            <br />
            Our journey is filled with challenges,
             but we embrace them with enthusiasm and determination.
              We believe that every obstacle is an opportunity for growth,
               and every project is a chance to showcase our creativity and expertise.
            <br />
            <br />
            Join us on our path to digital excellence and experience the future of innovation.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            Our services encompass a wide range of digital solutions designed to meet your unique needs. Whether you require creative illustrations, dynamic websites, fast and user-friendly applications, or innovative mobile apps, we have the expertise to deliver outstanding results.
            <br />
            <br />
            At Creative Innovators, we are dedicated to bringing your ideas to life. Our team of experts will work closely with you to ensure that your vision becomes a reality. We take pride in our ability to create digital experiences that leave a lasting impression.
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
  
};

export default About;