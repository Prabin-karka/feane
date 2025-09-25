import React from 'react';
import styles from './OfferCards.module.css';
import offerimg1 from '../../assets/Offer/o1.jpg'
import offerimg2 from '../../assets/Offer/o2.jpg'
import { BiSolidCart } from "react-icons/bi";

const OfferCards = () => {
  return (
    <div className={styles.offersContainer}>
      {/* card 1 */}
      <div className={styles.offerCard}>
        <div className={styles.imageWrapper}>
          <img
            src={offerimg1}
            alt="Burger"
          />
        </div>
        <div className={styles.offerText}>
          <h3>Tasty Thursdays</h3>
          <p className={styles.discount}>20% <span>off</span></p>
          <button className={styles.orderButton}>
            Order Now <span className={styles.cartIcon}>< BiSolidCart/></span>
          </button>
        </div>
      </div>
{/* card 2 */}
      <div className={styles.offerCard}>
        <div className={styles.imageWrapper}>
          <img
            src={offerimg2}
            alt="Pizza"
          />
        </div>
        <div className={styles.offerText}>
          <h3>Pizza Days</h3>
          <p className={styles.discount}>15% <span>off</span></p>
          <button className={styles.orderButton}>
            Order Now <span className={styles.cartIcon}>< BiSolidCart/></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OfferCards;
