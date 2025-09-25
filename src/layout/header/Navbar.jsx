// import React from 'react';
// import styles from './Navbar.module.css';
// import { FaUser, FaShoppingCart, FaSearch } from 'react-icons/fa';

// const Navbar = () => {
//   const navItems = [
//     { name: "HOME", path: '/', isActive: true },
//     { name: "MENU", path: '/menu' },
//     { name: "ABOUT", path: '/about' },
//     { name: "BOOK TABLE", path: '/booktable' }
//   ];

//   return (
//     <div className={styles.navbar_main}>
//       <div className={styles.navbar_container}>
//         {/* Brand name */}
//         <div>
//           <a href="/" className={styles.brand_name}>Feane</a>
//         </div>

//         {/* Navigation + Icons */}
//         <div className={styles.spliter_div}>
//           {/* Nav items */}
//           <div className={styles.navItems}>
//             {navItems.map((item, index) => (
//               <a
//                 key={index}
//                 href={item.path}
//                 className={`${styles.items_a} ${item.isActive ? styles.active : ''}`}
//               >
//                 {item.name}
//               </a>
//             ))}
//           </div>

//           {/* Icons + button */}
//           <div className={styles.icon_items}>
//             <a href="/" className={styles.icon}><FaUser /></a>
//             <a href="/" className={styles.icon}><FaShoppingCart /></a>
//             <a href="/" className={styles.icon}><FaSearch /></a>
//             <a href="/order" className={styles.icon_button}>Order Online</a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

















import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { FaUser, FaShoppingCart, FaSearch, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "HOME", path: '/' },
    { name: "MENU", path: '/menu' },
    { name: "ABOUT", path: '/about' },
    { name: "BOOK TABLE", path: '/booktable' }
  ];

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className={styles.navbar_main}>
      <div className={styles.navbar_container}>
        {/* Brand */}
        <a href="/" className={styles.brand_name}>Feane</a>

        {/* Hamburger icon */}
        <div className={styles.hamburger_icon} onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={24} color="white" /> : <FaBars size={24} color="white" />}
        </div>

        {/* Nav + Icons  */}
        <div className={`${styles.spliter_div} ${menuOpen ? styles.open : ''}`}>
          <div className={styles.navItems}>
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.path}
                className={`${styles.items_a} ${item.isActive ? styles.active : ''}`}
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className={styles.icon_items}>
            <a href="/" className={styles.icon}><FaUser /></a>
            <a href="/" className={styles.icon}><FaShoppingCart /></a>
            <a href="/" className={styles.icon}><FaSearch /></a>
            <a href="/order" className={styles.icon_button}>Order Online</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
