"use client";

import styles from "./AboutSection.module.css";
import Taco from "../../public/icons/hamburger.svg";
import { usePathname } from "next/navigation";
import LayoutWrapper from "../LayoutWrapper";

const AboutSection = () => {
  const pathname = usePathname();

  return (
    <div className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <h2 className={styles.heading}>
              We followed our heart and it led us to cooking
            </h2>
            <div>
              <p className={styles.copy}>
                At Tasty, we believe that the secret ingredient to any great
                dish isn&apos;t just the fresh produce or the rich spices;
                it&apos;s the people who make it all come together. Our team is
                a vibrant tapestry of culinary experts, food enthusiasts, and
                service-focused individuals, each bringing their unique flavors
                to the table.
              </p>
              <div className={styles.iconTextContainer}>
                <div className={styles.itextLeft}>
                  <Taco width={30} height={30} className={styles.icon} />
                </div>
                <div className={styles.itexRight}>
                  <p className={styles.copyii}>Best tacos in the game</p>
                </div>
              </div>
              <div className={styles.iconTextContainer}>
                <div className={styles.itextLeft}>
                  <Taco width={30} height={30} className={styles.icon} />
                </div>
                <div className={styles.itexRight}>
                  <p className={styles.copyii}>Most items on our menu</p>
                </div>
              </div>
              <div className={styles.iconTextContainer}>
                <div className={styles.itextLeft}>
                  <Taco width={30} height={30} className={styles.icon} />
                </div>
                <div className={styles.itexRight}>
                  <p className={styles.copyii}>Eat great even late</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <video preload='auto' autoPlay muted loop className={styles.video}>
              <source src='./videos/video1.mp4' />
            </video>
            <video preload='auto' autoPlay muted loop className={styles.video}>
              <source src='./videos/video2.mp4' />
            </video>
            <video preload='auto' autoPlay muted loop className={styles.video}>
              <source src='./videos/video3.mp4' />
            </video>
          </div>
        </div>
      </LayoutWrapper>
    </div>
  );
};
export default AboutSection;
