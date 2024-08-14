import UserSidebar from "../../components/layout/UserSidebar";
import { ReactNode } from "react";
import LayoutWrapper from "../../components/LayoutWrapper";
import ContentPadding from "../../components/ContentPadding/ContentPadding";
import styles from "./settingStyles.module.css";
import Nav from "../../components/Nav/Nav";

interface Props {
  children: ReactNode;
}

const UserLayout = ({ children }: Props) => {
  return (
    <main className={styles.parent}>
      <Nav color='olive' barColor='oliveBar' />
      <LayoutWrapper>
        <h1 className={styles.heading}>User Settings</h1>
        <div className={styles.content}>
          <div className={styles.left}>
            <UserSidebar />
          </div>
          <div className={styles.right}>{children}</div>
        </div>
      </LayoutWrapper>
    </main>
  );
};
export default UserLayout;
