import ContentPadding from "../../components/ContentPadding/ContentPadding";
import LayoutWrapper from "../../components/LayoutWrapper";
import AdminSidebar from "../../components/layout/AdminSidebar";
import { ReactNode } from "react";
import styles from "./AdminLayoutStyles.module.css";
import Nav from "../../components/Nav/Nav";

interface Props {
  children: ReactNode;
}

const AdminLayout = ({ children }: Props) => {
  return (
    <div className={styles.parent}>
      <Nav color='olive' barColor='oliveBar' />
      <LayoutWrapper>
          <h1 className={styles.heading}>Admin Dashboard</h1>
          <div className={styles.content}>
            <div className={styles.left}>
              <AdminSidebar />
            </div>
            <div className={styles.right}>{children}</div>
          </div>
      </LayoutWrapper>
    </div>
  );
};

export default AdminLayout;
