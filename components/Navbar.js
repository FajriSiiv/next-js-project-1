import { Button } from "@material-ui/core";
import ButtonMaterial from "./ButtonMaterial";
import Link from "next/link";
import styles from "../styles/SCSS/Navbar.module.scss";
import Head from "next/head";
import ArrowDown from "@material-ui/icons/ArrowDropDown";
import ArrowUp from "@material-ui/icons/ArrowDropUp";
import { Lens } from "@material-ui/icons";

const Navbar = () => {
  // console.log(styles.linkflex);
  // const linkFlex = styles.linkflex;

  const handleLink = () => {
    document.querySelector(".handleLink").classList.toggle(styles.linkflex);
  };
  const handleLink2 = () => {
    document.querySelector(".handleLink2").classList.toggle("Navbar_linkflex__13bHR");
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Next JS</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.navjudul}>NEXT JS</h1>
      <div className={`${styles.nav} nav`}>
        <div className={`${styles.navigationone} ${styles.navi}`}>
          <Link href="/Content/gettingstarted">
            <Button>
              <h1>Getting Started</h1>
              <Lens className={styles.lens} />
            </Button>
          </Link>
        </div>
        <div className={`${styles.navigationone} ${styles.navi}`}>
          <Button onClick={handleLink}>
            <h1>Basic Feature</h1>
            <ArrowDown />
          </Button>
          <div className={`${styles.link} ${styles.handleLink} handleLink`}>
            <Link href="/Content/helloworld">
              <a>Hello World</a>
            </Link>
            <Link href="/Content/aljabar">
              <a>Aljabar</a>
            </Link>
            <Link href="/Content/page2">
              <a>Page Dua</a>
            </Link>
          </div>
        </div>
        <div className={`${styles.navigationtwo} ${styles.navi} `}>
          <Button onClick={handleLink2}>
            <h1>Navigasi Kedua</h1>
            <ArrowDown />
          </Button>
          <div className={`${styles.link} ${styles.handleLink} handleLink2`}>
            <Link href="/Content/helloworld">
              <a>Hello World Page</a>
            </Link>
            <Link href="/Content/aljabar">
              <a>Aljabar Page</a>
            </Link>
            <Link href="/Content/page2">
              <a>Link 3</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
