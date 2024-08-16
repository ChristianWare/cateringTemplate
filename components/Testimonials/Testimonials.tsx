import styles from "./Testimonials.module.css";
import StarCluster from "../StarCluster/StarCluster";
import Person from "../../public/icons/person.svg";
import Pasta from "../../public/icons/pasta.svg";
import Hamburger from "../../public/icons/hamburger.svg";

const reviews = [
  {
    id: 71,
    review:
      "The catering service was exceptional! The food was delicious, and the presentation was top-notch. Our guests couldn't stop raving about it.",
    reviewer: "Jason W.",
    company: "Gilbert, AZ",
  },
  {
    id: 72,
    review:
      "This catering team was a game-changer for our event. The menu was customized to perfection, and the service was seamless from start to finish.",
    reviewer: "Linda R.",
    company: "Mesa, AZ",
  },
  {
    id: 73,
    review:
      "Impressed with the quality and service! The catering team delivered exactly what we needed, making our event a memorable one. Highly recommended!",
    reviewer: "Michael S.",
    company: "Chandler, AZ",
  },
  {
    id: 74,
    review:
      "The catering exceeded our expectations. The food was not only delicious but beautifully presented. The team was professional and attentive to all our needs.",
    reviewer: "Daniel P.",
    company: "Brooklyn, NY",
  },
  {
    id: 75,
    review:
      "Highly recommend this catering service for any event. The food was outstanding, and the staff went above and beyond to ensure everything was perfect.",
    reviewer: "Kirk U.",
    company: "Queens, NY",
  },
  {
    id: 76,
    review:
      "Thanks to this amazing catering service, our event was a huge success. The food was a hit with all our guests, and the service was impeccable.",
    reviewer: "Reggie R.",
    company: "Houston, TX",
  },
  {
    id: 77,
    review:
      "This catering team took our event to the next level. The food was incredible, and the service was flawless. We'll definitely be using them again!",
    reviewer: "Indar R.",
    company: "Los Angeles, CA",
  },
  {
    id: 78,
    review:
      "Great experience working with this catering service. They customized the menu to our specific needs, and the results were phenomenal.",
    reviewer: "Lawrence S.",
    company: "Portland, OR",
  },
  {
    id: 79,
    review:
      "The catering service simplified our event planning. The food was delicious, the service was excellent, and our guests were extremely satisfied.",
    reviewer: "Jared U.",
    company: "Trenton, NJ",
  },
  {
    id: 80,
    review:
      "Impressive work from this catering team. The food was a highlight of our event, and the service was professional and attentive.",
    reviewer: "William S.",
    company: "Sacramento, CA",
  },
  {
    id: 81,
    review:
      "This catering service delivered exactly what we needed for our event. The food was exceptional, and the staff was friendly and professional.",
    reviewer: "Chris N.",
    company: "Las Vegas, NV",
  },
] as const;


const Testimonials = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.bottom}>
          <div className={styles.top}>
            <Pasta className={styles.pasta} />
            <Hamburger className={styles.hamburger} />
            <h2 className={styles.heading}>What our clients say</h2>
            <p className={styles.copy}>
              Read What Our Clients Have to Say About Their Journey with Us. We
              use the latest technologies and tools to ensure that our solutions
              are scalable, efficient, and secure. Our team follows agile
              methodologies to deliver projects on time and on budget.
            </p>
            <StarCluster color='tan' />
          </div>
        </div>
      </div>
      <div className={styles.cardContainer1}>
        {reviews.map((x) => (
          <div key={x.id} className={styles.card}>
            <p className={styles.review}>&rdquo;{x.review}&rdquo;</p>
            <div className={styles.personBox}>
              <Person width={50} height={50} className={styles.personImage} />
              <p className={styles.reviewer}>
                {x.reviewer}
                <span className={styles.company}>{x.company}</span>
                <StarCluster />
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
