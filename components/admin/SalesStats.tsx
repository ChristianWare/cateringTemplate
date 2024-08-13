import styles from "./SalesStats.module.css";

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
          <i
            className='fas fa-dollar-sign fa-4x'
            style={{ color: "#7065f0" }}
          ></i>
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
          <i
            className='fas fa-file-invoice fa-4x'
            style={{ color: "#7065f0" }}
          ></i>

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
