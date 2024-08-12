"use client";

import LayoutWrapper from "../LayoutWrapper";
import styles from "./AboutHero.module.css";
import Nav from "../Nav/Nav";
import { motion } from "framer-motion";
import { fadeIn } from "../../animation/variants";
import Label from "../Label/Label";

const AboutHero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.imgOverlay}></div>
      <video preload='auto' autoPlay muted loop className={styles.video}>
        <source src='./videos/video1.mp4' />
      </video>
      <Nav />
      <LayoutWrapper>
        <div className={styles.content}>
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className={styles.left}
          >
            <Label text='About Us' color='white' />
            <h1 className={styles.heading}>
              Discover our <br />
              culinary story
            </h1>
            <p className={styles.copy}>
              Dive into the deliciousness of gourmet pizzas and burgers
              delivered straight to your door!
            </p>
          </motion.div>
        </div>
      </LayoutWrapper>
    </section>
  );
};

export default AboutHero;
