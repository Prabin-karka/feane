import React from 'react';
import styles from './Testimonial.module.css';
import user1 from '../../assets/testimonial/client1.jpg'
import user2 from '../../assets/testimonial/client2.jpg'

const Testimonials = () => {
  return (
    <section className={styles.testimonials}>
      <h2 className={styles.heading}>What Says Our Customers</h2>

      <div className={styles.cardContainer}>
        <div className={styles.cardWrapper}>
          <div className={styles.card}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            </p>
            <h4>Moana Michell</h4>
            <span>magna aliqua</span>
          </div>
          <div className={styles.avatar}>
            <img src={user1} alt="Moana Michell" />
            <div className={styles.triangle}></div>
          </div>
        </div>

        <div className={styles.cardWrapper}>
          <div className={styles.card}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            </p>
            <h4>Mike Hamell</h4>
            <span>magna aliqua</span>
          </div>
          <div className={styles.avatar}>
            <img src={user2} alt="Mike Hamell" />
            <div className={styles.triangle}></div>
          </div>
        </div>
      </div>

      <div className={styles.navButtons}>
        <button>&lt;</button>
        <button>&gt;</button>
      </div>
    </section>
  );
};

export default Testimonials;
