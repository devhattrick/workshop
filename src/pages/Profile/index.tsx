import React from "react";
import styles from "./index.module.scss";
// img
import { Profile1 } from "../../images";

const NameComponent: React.FC = (): JSX.Element => {
  return (
    <>
      <div className={styles.container}>
        <p>
          {new Date().toLocaleDateString("th-TH", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }) + ""}
        </p>
        <section className={styles.profileWrapper}>
          <div className={styles.profileImage}>
            <img src={Profile1} className={styles.image} alt="profile img" />
          </div>
          <p className={styles.textName}>Peerapol Panmuang</p>
        </section>
        <section className={styles.rowWrapper}>
          {/* <div></div> */}
          <hr className={styles.line} />
          {/* <div></div> */}
        </section>
      </div>
    </>
  );
};
export default NameComponent;
