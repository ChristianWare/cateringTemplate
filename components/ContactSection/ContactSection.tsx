import ContactForm from "../ContactForm/ContactForm";
import styles from "./ContactSection.module.css";
import Hamburger from "../../public/icons/hamburger.svg";


const ContactSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.bottom}>
        <div className={styles.left}>
          <h2 className={styles.heading}>Contact Us</h2>
          <h3 className={styles.headingii}>
            Discover unforgettable catering experiences with us
          </h3>
          <p className={styles.copy}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit
            placeat voluptatibus, odio sit perferendis, impedit facere et
            dolorum exercitationem quam in libero ipsam quibusdam nam iusto.
            Deleniti labore autem eaque!
          </p>
          <Hamburger className={styles.hamburger} />
        </div>
        <div className={styles.right}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
export default ContactSection;
