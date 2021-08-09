import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Homepage from "./Home/homepage";
// import styles from "../styles/SCSS/Index.module.scss";
import styles from "../styles/Home.module.scss";
import { Button } from "@material-ui/core";
import { useRouter } from "next/dist/client/router";
export default function Home() {
  const router = useRouter();
  return (
    <div className={`${styles.container} ${styles.indexCons}`}>
      <h1>Welcome To Next.JS</h1>
      <Button
        variant="contained"
        color="primary"
        onClick={() => router.push("/Content/gettingstarted")}
      >
        Getting Started
      </Button>
    </div>
  );
}
