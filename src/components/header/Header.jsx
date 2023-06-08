import React from "react";
import styles from "../header/styles.module.css";
import ContentWrapper from "../contentWrapper/ContentWrapper";
const Header = () => {
  return (
    <div className={styles.header}>
      <ContentWrapper className={styles.content}>
        <h1 className={styles.title}>{`Путешествуйте с\n Комфортом`}</h1>
        <p
          className={styles.desc}
        >{`C нашей компанией вы забудете обо всем кроме\n высокого уровня путешествий`}</p>
      </ContentWrapper>
      <img src=".wave.svg" alt="WaveImage" className={styles.wave} />
    </div>
  );
};

export default Header;
