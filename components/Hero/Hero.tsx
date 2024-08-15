"use client";

import styles from "./Hero.module.css";
import LayoutWrapper from "../LayoutWrapper";
import ContentPadding from "../ContentPadding/ContentPadding";
import Button from "../Button/Button";
import Label from "../Label/Label";
import Img from "../../public/images/heroBg.png";
import Image from "next/image";
import Nav from "../Nav/Nav";
import { motion } from "framer-motion";
import { fadeIn } from "../../animation/variants";
import RotatingText from "../RotatingText/RotatingText";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgOverlay}></div>
      <Image
        src={Img}
        alt='img'
        fill
        className={styles.img}
        sizes='(max-width: 768px) 50vw, (max-width: 1200px) 100vw'
        priority
      />
      <Nav />
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.content}>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial='hidden'
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className={styles.left}
            >
              <Label text='Catering Company' color='white' />
              <h1 className={styles.heading}>
                Your <br /> favorites <br /> delivered
              </h1>
              <p className={styles.copy}>
                We empower property owners to take control of their bookings
                with a custom website to showcase thier unique offerings.
              </p>
              <div className={styles.btnContainer}>
                <Button text='Contact us' href='/contact' btnType='primary' />
                <Button text='View Menu' href='/contact' btnType='primaryii' />
              </div>
            </motion.div>
            <div className={styles.right}>
              <RotatingText
                text='Catering • Catering • Catering • Catering • Catering • '
                showEmoji
              />
            </div>
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </div>
  );
};
export default Hero;
