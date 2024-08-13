import Dashboard from "../../../components/admin/Dashboard";
import styles from './Dashboard.module.css'

export const metadata = {
  title: "Dashboard - Admin || BookIT",
  description: "This is the description for the home page of this application.",
};

const DashboardPage = async () => {


  return (
    <main className={styles.parent}>
      <Dashboard />
    </main>
  );
};
export default DashboardPage;
