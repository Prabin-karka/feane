import React from 'react'
import styles from './Footer.module.css'
import {
    FaMapMarkerAlt, FaFacebookF, FaTwitter,
    FaLinkedinIn, FaInstagram, FaPinterest
} from 'react-icons/fa';
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";




const Footer = () => {
    return (
        <>
            {/* main container */}
            <div className={styles.footer_container}>

                {/* contact +feane+ opening hour container */}
                <div className={styles.footer_items}>
                    {/* contactus contents */}
                    <div className={styles.contact_container}>
                        <h1 className={styles.contactus_h1}>Contact Us</h1>
                        {/* details */}
                        <div className={styles.details_container}>
                            <div className={styles.details_items}>
                                <div className={styles.contact_icons}><FaMapMarkerAlt /></div>
                                <p className={styles.details_p}>Location</p>
                            </div>
                            <div className={styles.details_items}>
                                <div className={styles.datails_icon}><IoIosCall/></div>
                                <p className={styles.details_p}>call+01 1234567890</p>
                            </div>
                            <div className={styles.details_items}>
                                <div className={styles.datails_icon}><MdEmail/></div>
                                <p className={styles.details_p}>demo@gmail.com</p>
                            </div>

                        </div>

                    </div>
                    {/* feane contents */}
                    <div className={styles.feane_container}>
                        <h1><a href="/" className={styles.feane_a}>Feane</a></h1>


                        {/* details */}
                        <div className={styles.details_container}>
                            <div className={styles.feane_items}>
                                <p className={styles.details_p}>Necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with

</p>
                                {/* icons */}
                                <div className={styles.icon_container}>
                                    <div className={styles.details_icon}><FaFacebookF /></div>
                                    <div className={styles.details_icon}><FaTwitter /></div>
                                    <div className={styles.details_icon}><FaLinkedinIn /></div>
                                    <div className={styles.details_icon}><FaInstagram /></div>
                                    <div className={styles.details_icon}><FaPinterest /></div>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* opening hour contents */}
                    <div className={styles.opening_container}>
                        <h1 className={styles.opening_h1}>Opening Hours</h1>

                        {/* details */}
                        <div className={styles.details_container}>

                            <div className={styles.details_items}>
                                <p className={styles.details_p}>Everything</p>
                            </div>
                            <div className={styles.details_items}>
                                <p className={styles.details_p}>10.00 Am - 10.00 Pm</p>
                            </div>

                        </div>
                    </div>

                </div>
                {/* reserved contents */}
                <div className={styles.resersed_container}>
                    <h4 className={styles.reserved_h4}>@ 2025 All Rights Reserved By Free Html Templates</h4>
                    <h4 className={styles.reserved_h4}>©Distributed By ThemeWagon</h4>
                </div>
            </div>
        </>
    )
}

export default Footer
