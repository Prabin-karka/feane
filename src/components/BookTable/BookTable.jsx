import React from 'react';
import styles from './BookTable.module.css';

const BookTable = () => {
  return (
    <div className={styles.bookTableContainer}>
      <div className={styles.formSection}>
        <h2 className={styles.heading}>Book A Table</h2>
        <form className={styles.form}>
          <input type="text" placeholder="Your Name" className={styles.input} />
          <input type="number" placeholder="Phone Number" className={styles.input} />
          <input type="email" placeholder="Your Email" className={styles.input} />
          <select className={styles.input}>
            <option value="">How many persons?</option>
            <option value="1">1 Person</option>
            <option value="2">2 Persons</option>
            <option value="3">3 Persons</option>
            <option value="4">4 Persons</option>
            <option value="5">5+ Persons</option>
          </select>
          <input type='date' placeholder="dd-mm-yyyy" className={styles.input} />
          <button type="submit" className={styles.button}>BOOK NOW</button>
        </form>
      </div>

      <div className={styles.mapSection}>
        <iframe
    title="Google Map"
    className={styles.map}
    loading="lazy"
    allowFullScreen
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3922.753388153019!2d77.2480170750483!3d8.24819159179086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0454b0c1f2a5f1%3A0x7e7f3e3f1e5d4e5f!2sVilavancode%2C%20Tamil%20Nadu%20629252!5e0!3m2!1sen!2sin!4v1718271223456!5m2!1sen!2sin"
  ></iframe>

      </div>
    </div>
  );
};

export default BookTable;
