"use client";

import LayoutWrapper from "../LayoutWrapper";
import styles from "./MenuHero.module.css";
import Steak from "../../public/icons/steak.svg";
import Meat from "../../public/icons/meat.svg";
import Donut from "../../public/icons/donut.svg";
import Icecream from "../../public/icons/icecream.svg";
import Image from "next/image";
import Img from "../../public/images/heroBg2.png";
import Nav from "../Nav/Nav";
import { motion } from "framer-motion";
import { fadeIn } from "../../animation/variants";
import Label from "../Label/Label";

const MenuHero = () => {
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
        <div className={styles.content}>
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className={styles.left}
          >
            <Label text='what we offer' color='white' />
            <h1 className={styles.heading}>
              Our <br /> tasty menu
            </h1>
            <p className={styles.copy}>
              We empower property owners to take control of their bookings with
              a custom website to showcase thier unique offerings.
            </p>
            <div className={styles.iconBox}>
              <Steak className={styles.steak} />
              <Meat className={styles.meat} />
              <Donut className={styles.donut} />
              <Icecream className={styles.icecream} />
            </div>
          </motion.div>
        </div>
      </LayoutWrapper>
    </div>
  );
};
export default MenuHero;
