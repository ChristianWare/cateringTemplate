"use client";

import Button from "../components/Button/Button";
import ContentPadding from "../components/ContentPadding/ContentPadding";
import FalseButton from "../components/FalseButton/FalseButton";
import LayoutWrapper from "../components/LayoutWrapper";
import styles from "./Error.module.css";

interface CustomError extends Error {
  errMessage: string;
}

export default function Error({
  error,
  reset,
}: {
  error: CustomError & { digest?: string };
  reset?: () => void;
}) {
  return (
    <LayoutWrapper>
      <ContentPadding>
        <div className={styles.container}>
          <h2 className={styles.heading}>{error?.errMessage}</h2>
          <p className={styles.copy}>
            Opps! Something went wrong! Sorry for the incovience.
          </p>
          <div className={styles.btnContainer}>
            <FalseButton
              text='Try Again'
              btnType='secondary'
              onClick={() => reset?.()}
            />
            <Button
              text='Go Home'
              href='/'
              btnType='primaryii'
              onClick={() => reset?.()}
            />
          </div>
        </div>
      </ContentPadding>
    </LayoutWrapper>
  );
}
