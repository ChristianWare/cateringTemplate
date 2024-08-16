import Link from "next/link";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./Footer.module.css";
import Instagram from "../../public/icons/instagram.svg";
import LinkedIn from "../../public/icons/linkedin.svg";
import Facebook from "../../public/icons/facebook.svg";
import Twitter from "../../public/icons/twitter.svg";
import Email from "../../public/icons/email.svg";
import ContactSection from "../ContactSection/ContactSection";
import Image from "next/image";

const navItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "Reviews",
    href: "/reviews",
  },
  {
    text: "Guides",
    href: "/guides",
  },
  {
    text: "Gear",
    href: "/gear",
  },
  {
    text: "Glossary",
    href: "/glossary",
  },
];

const Footer = () => {
  return (
    <div className={styles.parent}>
      <LayoutWrapper>
        <footer className={styles.container}>
          <div className={styles.topTop}>
            <ContactSection />
          </div>
          <div className={styles.brandInfoMobile}>
            <div className={styles.logoBox}>
              <h6 className={styles.logo}>LOGO HERE</h6>
              <p className={styles.copy}>
                Explore our fairway treasures, refine your swing, and dive deep
                into the world of golf – where passion meets precision.
              </p>
              <br />
              <div className={styles.socials}>
                <div className={styles.socialContainer}>
                  <Instagram width={15} height={15} className={styles.icon} />
                </div>
                <div className={styles.socialContainer}>
                  <LinkedIn width={15} height={15} className={styles.icon} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.top}>
            <div className={styles.brandInfo}>
              <div className={styles.logoBox}>
                <h6 className={styles.logo}>LOGO HERE</h6>
                <p className={styles.copy}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facere, atque.
                </p>
                <br />
                <div className={styles.socials}>
                  <div className={styles.socialContainer}>
                    <Instagram width={20} height={20} className={styles.icon} />
                  </div>
                  <div className={styles.socialContainer}>
                    <LinkedIn width={15} height={15} className={styles.icon} />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.links}>
              <div className={styles.heading}>Links</div>
              {navItems.map((x, index) => (
                <div key={index}>
                  <Link href={x.href} className={styles.link}>
                    {x.text}
                  </Link>
                </div>
              ))}
            </div>
            <div className={styles.contactInfo}>
              <div className={styles.heading}>CONTACT INFO</div>
              <div className={styles.box}>
                <Email width={20} height={20} className={styles.iconii} />
                info@gmail.com
              </div>
              <div className={styles.box}>
                <Facebook width={20} height={20} className={styles.iconii} />
                facebook.com/catering
              </div>
              <div className={styles.box}>
                <Twitter width={20} height={20} className={styles.iconii} />
                twitter.com/catering
              </div>
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.logoii}>Copyright &#169; 2024</div>
            <ul className={styles.disclosures}>
              <li className={styles.disc}>TERMS</li>
              <li className={styles.disc}>PRIVACY</li>
            </ul>
          </div>
        </footer>
      </LayoutWrapper>
    </div>
  );
};
export default Footer;
