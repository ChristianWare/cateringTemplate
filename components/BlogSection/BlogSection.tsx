"use client";

import styles from "./BlogSection.module.css";
import LayoutWrapper from "../LayoutWrapper";
import Button from "../Button/Button";
import Image from "next/image";
import Img from "../../public/images/burger4.png";
import Img2 from "../../public/images/pizza2.png";
import Img3 from "../../public/images/burger3.png";
import { usePathname } from "next/navigation";

const data = [
  {
    id: 1,
    title: "The Ultimate Guide to Crafting the Perfect Cheeseburger",
    src: Img,
    price:
      "Dive into the art and science behind creating the ultimate cheeseburger.",
  },
  {
    id: 2,
    title: "Around the World in 8 Pizzas",
    src: Img2,
    price:
      "Take your readers on a culinary journey with a look at how different cultures put their unique spin on pizza.",
  },
  {
    id: 3,
    title: "The Rise of Plant-Based Burgers: A Delicious Alternative",
    src: Img3,
    price:
      "As more people embrace plant-based diets, the popularity of plant-based burgers has skyrocketed.",
  },
];

const BlogSection = () => {
  const pathname = usePathname();

  return (
    <section className={styles.parent}>
      <LayoutWrapper>
        <div className={styles.content}>
          {pathname !== "/blog" && (
            <div className={styles.top}>
              <h2 className={styles.heading}>From Our Blog</h2>
              <div className={styles.btnContainerii}>
                <Button
                  btnType='primaryiii'
                  text='See All Blog Entries'
                  href='/'
                />
              </div>
            </div>
          )}
          <div className={styles.bottom}>
            {data.map((x) => (
              <div key={x.id} className={styles.card}>
                <div className={styles.imgContainer}>
                  <Image src={x.src} alt='' fill className={styles.img} />
                </div>
                <div className={styles.cardBottom}>
                  <h3 className={styles.title}>{x.title}</h3>
                  <p className={styles.price}>{x.price}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.btnContainer}>
            <Button btnType='primaryiii' text='See All Blog Entries' href='/' />
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default BlogSection;
