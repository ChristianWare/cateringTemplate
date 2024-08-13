"use client";

import ContentPadding from "../../components/ContentPadding/ContentPadding";
import LayoutWrapper from "../../components/LayoutWrapper";
import { useAppSelector } from "../../redux/hooks";
import Link from "next/link";
import Button from "../../components/Button/Button";
import styles from "./AccountPage.module.css";
import Nav from "../../components/Nav/Nav";

const options = [
  {
    option: "View My Bookings",
    desc: "See all of your bookings, and view receipts and confirmation statements.",
    href: "/bookings/me",
  },
  {
    option: "Update My Account",
    desc: "Update your username, email and password",
    href: "/me/update",
  },
];

const AccountPage = () => {
  const { user } = useAppSelector((state) => state.auth);
  return (
    <main className={styles.parent}>
      <Nav color='olive' barColor='oliveBar' />
      <LayoutWrapper>
        <ContentPadding>
          {user ? (
            <>
              <div className={styles.top}>
                <h1 className={styles.heading}>
                  Hi, {user?.name}
                </h1>
                <h2>What would you like to do today?</h2>
              </div>
              <div className={styles.bottom}>
                {options.map((x, index) => (
                  <Link href={x.href} key={index} className={styles.box}>
                    <h3 className={styles.option}>{x.option}</h3>
                    <p className={styles.desc}>{x.desc}</p>
                  </Link>
                ))}
                {user?.role === "admin" && (
                  <Link href='/admin/dashboard' className={styles.box}>
                    <h3 className={styles.option}>Admin Dashboard</h3>
                    <p className={styles.desc}>
                      View Sales dashboard, update property details, manage
                      bookings, view usuers, and verify reviews.
                    </p>
                  </Link>
                )}
              </div>
            </>
          ) : (
            <>
              <h2 className={styles.heading}>
                You need to be logged in to access this page.
              </h2>
              <div className={styles.btnContainer}>
                <Button href='/login' text='Login' btnType='primaryiii' />
                <Button href='/' text='Go home' btnType='primaryiv' />
              </div>
            </>
          )}
        </ContentPadding>
      </LayoutWrapper>
    </main>
  );
};
export default AccountPage;
