import UserSidebar from "../../components/layout/UserSidebar";
import { ReactNode } from "react";
import LayoutWrapper from "../../components/LayoutWrapper";
import ContentPadding from "../../components/ContentPadding/ContentPadding";
import styles from "./settingStyles.module.css";

interface Props {
  children: ReactNode;
}

const UserLayout = ({ children }: Props) => {
  return (
    <LayoutWrapper>
      <ContentPadding>
        <h1 className={styles.heading}>User Settings</h1>
        <div className={styles.content}>
          <div className={styles.left}>
            <UserSidebar />
          </div>
          <div className={styles.right}>{children}</div>
        </div>
      </ContentPadding>
    </LayoutWrapper>
  );
};
export default UserLayout;
