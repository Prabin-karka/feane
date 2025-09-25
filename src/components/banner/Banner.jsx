import React from 'react'
import styles from './banner.module.css'
const Banner = () => {
  return (
    <>
      <div className={styles.banner_container}>
        {/* image container and image as bg */}
        <div className={styles.img_container}>
           

            <div className={styles.banner_details}>
              <h1 className={styles.banner_h1}>Fast Food Restaurant</h1>
            <p className={styles.banner_p}>Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.</p>
            <div>
              <button className={styles.banner_button}>Order Now</button>
            </div>


            {/* slider dot */}

           <div className={styles.slider_height}>
             <div className={styles.slider_dot_main}>
              <div className={styles.slider_dot1}></div>
              <div className={styles.slider_dot2}></div>
              <div className={styles.slider_dot3}></div>
            </div>
           </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Banner
