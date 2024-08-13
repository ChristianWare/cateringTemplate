import styles from "./SalesStats.module.css";
import Money from "../../public/icons/money.svg";
import Invoice from "../../public/icons/invoice.svg";

interface Props {
  data: {
    totalSales: number;
    numberOfBookings: string;
  };
}

const SalesStats = ({ data }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.box}>
          <Money className={styles.icon} />
          <div>
            <p className={styles.stats}>Sales:</p>
            <p>
              <b className={styles.stats}>
                {(data?.totalSales).toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </b>
            </p>
          </div>
        </div>
        <div className={styles.box}>
          <Invoice className={styles.icon} />

          <div>
            <p className={styles.stats}>Reservations:</p>
            <p>
              <b className={styles.stats}>
                {Math.floor(parseFloat(data?.numberOfBookings))}
              </b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SalesStats;
