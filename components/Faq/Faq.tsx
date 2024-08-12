"use client";

import { useState } from "react";
import styles from "./Faq.module.css";
import LayoutWrapper from "../LayoutWrapper";
import ContentPadding from "../ContentPadding/ContentPadding";
import Arrow from "../../public/icons/downArrow.svg";
import Label from "../Label/Label";
import Hamburger from "../../public/icons/hamburger.svg";

const faqs = [
  {
    id: 36,
    question: "Why should I use a direct booking website instead of Airbnb?",
    answer:
      "Direct booking websites offer more control over your property, lower fees, and personalized branding. You have direct communication with guests and can build a loyal customer base.",
  },
  {
    id: 36.1,
    question: "How does the booking process work on a direct booking website?",
    answer:
      "Guests can browse your property, view details, and make reservations directly through your website. You have the flexibility to set your own booking policies and payment processes.",
  },
  {
    id: 36.2,
    question: "What features can I customize on my direct booking website?",
    answer:
      "You can customize the website design, branding elements, property details, pricing, and policies. We offer flexibility to tailor the platform to your unique needs.",
  },
  {
    id: 36.3,
    question: "Is it easy for guests to find my direct booking website?",
    answer:
      "We implement SEO strategies to improve the visibility of your website on search engines. Additionally, we can assist with marketing strategies to drive traffic to your platform.",
  },
] as const;

const Faq = () => {
  const [selected, setSelected] = useState<null | number>(null);

  const toggle = (i: any) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };
  return (
    <div className={styles.container}>
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.labelContainer}>
            <Label text="FAQ's" />
          </div>
          <h2 className={styles.heading}>Your Catering <br /> Questions Answered</h2>
          <div className={styles.content}>
            <div className={styles.top}>
              <p className={styles.topText}>
                Here are some commonly asked questions and their answers below.
                If you don&#39;t see your questions here, call us any time.
              </p>
              <Hamburger className={styles.hamburger} />
            </div>
            <div className={styles.border}>
              <div className={styles.bottom}>
                {faqs.map((x, i) => (
                  <div
                    key={x.id}
                    className={
                      selected === i
                        ? styles.qaContainer + " " + styles.showBorder
                        : styles.qaContainer
                    }
                    onClick={() => toggle(i)}
                  >
                    <div className={styles.headingArrowContainer}>
                      <div className={styles.h3Container}>
                        <span className={styles.index}>0{i + 1}. </span>
                        <h3 className={styles.question} lang='en'>
                          {x.question}
                        </h3>
                      </div>
                      {selected === i ? (
                        <Arrow
                          className={styles.iconFlip}
                          width={20}
                          height={20}
                        />
                      ) : (
                        <Arrow className={styles.icon} width={20} height={20} />
                      )}
                    </div>
                    <div
                      className={
                        selected === i
                          ? styles.answerContainer + " " + styles.show
                          : styles.answerContainer
                      }
                    >
                      <p className={styles.answer} lang='en'>
                        {x.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* <div className={styles.btnContainer}></div> */}
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </div>
  );
};
export default Faq;
