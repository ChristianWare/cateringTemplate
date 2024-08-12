import styles from "./Testimonials.module.css";
import StarCluster from "../StarCluster/StarCluster";
import Person from "../../public/icons/person.svg";
import Pasta from "../../public/icons/pasta.svg";
import Hamburger from "../../public/icons/hamburger.svg";

const reviews = [
  {
    id: 71,
    review:
      "Fonts & Footers transformed our vacation rental business! Their direct booking website is sleek, user-friendly, and has significantly increased our bookings.",
    reviewer: "Jason W.",
    company: "Gilbert, AZ",
  },
  {
    id: 72,
    review:
      "Working with Fonts & Footers was a game-changer for us. Their expertise in creating direct booking websites helped streamline our rental process and boost our revenue.",
    reviewer: "Linda R.",
    company: "Mesa, AZ",
  },
  {
    id: 73,
    review:
      "Impressed with the results! Fonts & Footers designed a custom booking platform that perfectly showcases our properties and has made managing bookings a breeze.",
    reviewer: "Michael S.",
    company: "Chandler, AZ",
  },
  {
    id: 74,
    review:
      "Fonts & Footers exceeded our expectations with our new direct booking website. It's professional, easy to navigate, and has improved our guests' booking experience.",
    reviewer: "Daniel P.",
    company: "Brooklyn, NY",
  },
  {
    id: 75,
    review:
      "Highly recommend Fonts & Footers for anyone in the vacation rental industry. Their direct booking websites are top-notch, and the support team is fantastic.",
    reviewer: "Kirk U.",
    company: "Queens, NY",
  },
  {
    id: 76,
    review:
      "Thanks to Fonts & Footers, we now have a modern, efficient direct booking website. Our guests love the seamless booking process, and so do we!",
    reviewer: "Reggie R.",
    company: "Houston, Tx",
  },
  {
    id: 77,
    review:
      "Fonts & Footers took our online presence to the next level. Our direct booking website is visually stunning and has helped us attract more guests than ever.",
    reviewer: "Indar R.",
    company: "Los Angeles, CA",
  },
  {
    id: 78,
    review:
      "Great experience working with Fonts & Footers. They tailored our direct booking website to our specific needs, and the results have been phenomenal.",
    reviewer: "Lawrence S.",
    company: "Portland, Or",
  },
  {
    id: 79,
    review:
      "Fonts & Footers' direct booking solution has simplified our business operations. It's user-friendly for both us and our guests, resulting in increased bookings.",
    reviewer: "Jared U.",
    company: "Trenton, NJ",
  },
  {
    id: 80,
    review:
      "Impressive work from Fonts & Footers. Our new direct booking website is generating more leads and conversions, making our rental business more profitable.",
    reviewer: "William S.",
    company: "Sacramento, CA",
  },
  {
    id: 81,
    review:
      "Fonts & Footers delivered exactly what we needed for our vacation rental business. Our direct booking website is professional, efficient, and has boosted our online presence.",
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
