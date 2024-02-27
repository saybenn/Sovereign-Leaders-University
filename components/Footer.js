import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Footer.module.scss";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.left}>
          {/* <div className={styles.nextImageContainer}>
            <Image
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              fill
              className={styles.nextImage}
              src="/images/logo.webp"
              alt="logo"
            />
  </div>*/}
          <a href="tel:7577777777">
            <AiOutlinePhone fontSize="1.2em" />
            (757) 777-7777
          </a>
          <a href="mailto:info@sovereignleaders.com">
            <AiOutlineMail fontSize="1.2em" /> info@sovereignleaders.com
          </a>
        </div>
        <div className={styles.right}>
          <ul className={styles.footerItems}>
            <li>
              <Link
                scroll={true}
                aria-label="Home Page"
                href="/"
                className={styles.footerItem}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                scroll={true}
                aria-label="About Page"
                href="/about"
                className={styles.footerItem}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                scroll={true}
                aria-label="Blog Page"
                href="/blog"
                className={styles.footerItem}
              >
                Blog
              </Link>
            </li>
            {/* <li>
              <Link
                scroll={true}
                aria-label="About Bold City Junk, Dump, and Demolition"
                href="/about"
                className={styles.footerItem}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                scroll={true}
                aria-label="Bold City Junk, Dump, and Demolition Services"
                href="/services"
                className={styles.footerItem}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                scroll={true}
                aria-label="Contact Bold City Junk, Dump, and Demolition"
                href="/contact"
                className={styles.footerItem}
              >
                Contact
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy;2024 Sovereign Leaders University</p>
        <a
          style={{ color: "white", textDecoration: "none" }}
          target="_blank"
          href="https://saybencodes.com/"
        >
          developed by saybencodes
        </a>
      </div>
    </footer>
  );
};
export default Footer;
