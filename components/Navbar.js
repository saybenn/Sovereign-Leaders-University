import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import styles from "../styles/NavBar.module.scss";
import Link from "next/link";
import Image from "next/image";

const NavBar = ({ close, handleClose }) => {
  //User Session

  //State
  const [show, setShow] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const [navShow, setNavShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(false);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setNavShow(false);
      } else {
        // if scroll up show the navbar
        setNavShow(true);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  //Use Effect
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <header>
      <nav
        className={styles.navBar}
        style={{
          top: navShow ? "0px" : "-20%",
          background:
            navShow && lastScrollY === 0 ? "transparent" : "rgb(7, 7, 7)",
        }}
      >
        <div className={styles.navMobile}>
          <div className={styles.navLeft}>
            <Link aria-label="Home Page" href="/" scroll={true}>
              <span>Sovereign Leaders University</span>
            </Link>
            {/* <AiOutlineMenu
              className={styles.menu}
              fontSize="2em"
              onClick={handleClose}
            />
            <a className={styles.callBtn} href="tel:NEEDPHONE">
              <AiOutlinePhone fontSize="2.3em" />
              Call Us Today!
            </a>{" "}  */}
          </div>

          <div className={styles.navRight}>
            <Link aria-label="Home Page" href="/" scroll={true}>
              <span>Home</span>
            </Link>
            <Link aria-label="About Page" href="/about" scroll={true}>
              <span>About</span>
            </Link>
            <Link aria-label="Blog Page" href="/blog" scroll={true}>
              <span>Blog</span>
            </Link>
          </div>
        </div>
        <div
          onMouseLeave={() => setIsShown(false)}
          className={styles.navDesktop}
        >
          <Link
            className={styles.logo}
            aria-label="Home Page"
            href="/"
            scroll={true}
          >
            <span>Sovereign Leaders University</span>
          </Link>
          {/* <ul className={styles.navItems}>
            <li className={styles.navItem}>
              <Link aria-label="Home Page" href="/" scroll={true}>
                Home
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link className={styles.navItem} href="/about" scroll={true}>
                About Us
              </Link>
            </li>
            <li
              onMouseEnter={() => setIsShown(true)}
              className={styles.navItem}
            >
              <Link className={styles.navItem} href="/services" scroll={true}>
                Services
              </Link>{" "}
              {isShown && (
                <ul onMouseLeave={() => setIsShown(false)}>
                  <li>
                    <Link
                      aria-label="Junk Removal"
                      href="/services/junk-removal"
                      scroll={true}
                    >
                      Junk Removal
                    </Link>
                  </li>
                  <li>
                    <Link
                      aria-label="Demolition"
                      href="/services/demolition"
                      scroll={true}
                    >
                      Demolition
                    </Link>
                  </li>
                  <li>
                    <Link
                      aria-label="Dumpster Supply"
                      href="/services/dumpster-supply"
                      scroll={true}
                    >
                      Dumpster Supply
                    </Link>
                  </li>
                  <li>
                    <Link
                      aria-label="Labor"
                      href="/services/labor"
                      scroll={true}
                    >
                      Labor
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li className={styles.navItem}>
              <Link className={styles.navItem} href="/contact" scroll={true}>
                Contact
              </Link>
            </li>
          </ul> */}
        </div>
      </nav>

      <div
        className={styles.sideMobileNav}
        style={{
          left: !close ? "0%" : "-56%",
        }}
      >
        <ul className={styles.navItems}>
          <div onClick={handleClose} className={styles.closeBtn}>
            X
          </div>
          <li className={styles.navItem}>
            <Link aria-label="Home Page" href="/" scroll={true}>
              Home
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link className={styles.navItem} href="/about" scroll={true}>
              About Us
            </Link>
          </li>
          {/* <ul className={styles.navItem} onClick={handleClose}>
            <Link className={styles.navItem} href="/services" scroll={true}>
              Services
            </Link>

            <li>
              <Link
                aria-label="Junk Removal"
                href="/services/junk-removal"
                scroll={true}
              >
                Junk Removal
              </Link>
            </li>
            <li>
              <Link
                aria-label="Demolition"
                href="/services/demolition"
                scroll={true}
              >
                Demolition
              </Link>
            </li>
            <li>
              <Link
                aria-label="Dumpster Supply"
                href="/services/dumpster-supply"
                scroll={true}
              >
                Dumpster Supply
              </Link>
            </li>
            <li>
              <Link aria-label="Labor" href="/services/labor" scroll={true}>
                Labor
              </Link>
            </li>
          </ul> */}

          <li className={styles.navItem}>
            <Link className={styles.navItem} href="/contact" scroll={true}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
