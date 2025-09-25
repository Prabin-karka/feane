import React from 'react';
import styles from './Menu.module.css';
import f1 from '../../assets/itemlist/f1.png'
import f2 from '../../assets/itemlist/f2.png'
import f3 from '../../assets/itemlist/f3.png'
import f4 from '../../assets/itemlist/f4.png'
import f5 from '../../assets/itemlist/f5.png'
import f6 from '../../assets/itemlist/f6.png'
import f7 from '../../assets/itemlist/f7.png'
import f8 from '../../assets/itemlist/f8.png'
import f9 from '../../assets/itemlist/f9.png'
import { BiSolidCart } from "react-icons/bi";
const menuItems = [
  {
    name: 'Delicious Pizza',
    price: '$20',
    img: f1,
  },
  {
    name: 'Delicious Burger',
    price: '$15',
    img: f2,
  },
  {
    name: 'Delicious Pizza',
    price: '$17',
    img: f3,
  },
  {
    name: 'Delicious Pasta',
    price: '$18',
    img: f4,
  },
  {
    name: 'French Fries',
    price: '$10',
    img: f5,
  },
  {
    name: 'Delicious Pizza',
    price: '$15',
    img: f6,
  },
  {
    name: 'Tasty Burger',
    price: '$12',
    img:f7,
  },
  {
    name: 'Tasty Burger',
    price: '$14',
    img: f8,
  },
  {
    name: 'Delicious Pasta',
    price: '$10',
    img: f9,
  },
];

const categories = ['All', 'Burger', 'Pizza', 'Pasta', 'Fries'];

const Menu = () => {
  return (
    <div className={styles.menuContainer}>
      <h2 className={styles.title}>Our Menu</h2>

      <div className={styles.categories}>
        {categories.map((cat, idx) => (
          <button
            key={idx}
            className={`${styles.categoryButton} ${idx === 0 ? styles.active : ''}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {menuItems.map((item, idx) => (
          <div className={styles.card} key={idx}>
            <div className={styles.img_container}> <img src={item.img} alt={item.name}  /></div>
            
            <div className={styles.cardContent}>
              <h3 className={styles.itemName}>{item.name}</h3>
              <p className={styles.desc}>
                Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam
                voluptatem repellendus sed eaque
              </p>
              <div className={styles.cardFooter}>
                <span className={styles.price}>{item.price}</span>
                <button className={styles.cartButton}>< BiSolidCart/></button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className={styles.viewMore}>View More</button>
    </div>
  );
};

export default Menu;
