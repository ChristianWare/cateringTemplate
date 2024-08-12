"use client";

import LayoutWrapper from "../LayoutWrapper";
import styles from "./BlogHero.module.css";
import Nav from "../Nav/Nav";
import { motion } from "framer-motion";
import { fadeIn } from "../../animation/variants";
import Label from "../Label/Label";

const BlogHero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgOverlay}></div>
      <Nav color='olive' barColor='oliveBar' />
      <LayoutWrapper>
        <div className={styles.content}>
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className={styles.left}
          >
            <Label text='what we offer' color='greenii' />
            <h1 className={styles.heading}>
              Our Blog
              <br /> & news
            </h1>
            <p className={styles.copy}>
              We empower property owners to take control of their bookings with
              a custom website to showcase thier unique offerings.
            </p>
          </motion.div>
        </div>
      </LayoutWrapper>
    </div>
  );
};

export default BlogHero;
