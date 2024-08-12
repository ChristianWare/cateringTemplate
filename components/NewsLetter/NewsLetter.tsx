import LayoutWrapper from "../LayoutWrapper";
import styles from "./NewsLetter.module.css";
import Image from "next/image";
import Img from "../../public/images/soup.png";
import Button from "../Button/Button";
import Cheese from "../../public/icons/cheese.svg";

const NewsLetter = () => {
  return (
    <section className={styles.parent}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.box}>
              <h3 className={styles.heading}>Subscribe to our Newsletter!</h3>
              <Cheese className={styles.icon} />
            </div>
            <p className={styles.copy}>
              Dive into a world where flavor meets passion, bringing you the
              latest culinary trends, mouth-watering recipes, and insider tips
              straight to your inbox.
            </p>
            <form className={styles.form}>
              <div className={styles.labelInputBox}>
                <input id='firstName' type='text' />
              </div>
              <div className={styles.btnContainer}>
                <Button btnType='primaryiii' href='/' text='Subscribe' />
              </div>
            </form>
          </div>
          <div className={styles.right}>
            <div className={styles.imgContainer}>
              <Image src={Img} alt='' fill className={styles.img} />
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default NewsLetter;
