import React from 'react';
import styles from './Feane.module.css';
import burgerImage from '../../assets/feane/about-img.png'; 

const Feane = () => {
  return (
    <div className={styles.feaneSection}>
      <div className={styles.imageContainer}>
        <img src={burgerImage} alt="Burger" className={styles.burgerImage} />
      </div>
      <div className={styles.textContent}>
        <h2 className={styles.heading}>We Are Feane</h2>
        <p className={styles.paragraph}>
          There are many variations of passages of Lorem Ipsum available, but the majority have
          suffered alteration in some form, by injected humour, or randomised words which don't look
          even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to
          be sure there isn't anything embarrassing hidden in the middle of text. All
        </p>
        <button className={styles.readMore}>Read More</button>
      </div>
    </div>
  );
};

export default Feane;
