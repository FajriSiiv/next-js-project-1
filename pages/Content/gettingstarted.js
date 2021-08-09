import { Button } from "@material-ui/core";
import { Minimize } from "@material-ui/icons";
import Link from "next/link";
import styles from "../../styles/Content/started.module.scss";
import { useRouter } from "next/dist/client/router";
const GettingStarted = () => {
  const router = useRouter();

  return (
    <>
      <div className={styles.container}>
        <div className={styles.bungkus}>
          <h1 className={styles.sub_judul}>Getting Started</h1>
          <p>Welcome to the Next.js documentation!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, repudiandae.</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident laudantium impedit
            eaque aspernatur quisquam suscipit debitis.
          </p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, numquam?</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, impedit. Excepturi
            deleniti hic ab sint.
            <Link href="/">Github</Link>
          </p>
          <h4 className={styles.kebutuhan}>System Requirment</h4>
          <li>
            <Minimize className={styles.strip} /> Node.js 12.0 or later
          </li>
          <li>
            <Minimize className={styles.strip} /> MacOS,Windows and Linux Supported
          </li>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum similique perspiciatis
            cum odit quos sed, praesentium autem quia consectetur saepe ducimus. Architecto quos
            sint amet iste consequatur sapiente. Distinctio, accusantium. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Magni autem itaque quam id, praesentium sit aliquam atque
            illum placeat, necessitatibus rerum eum temporibus quae. Harum facilis blanditiis error
            nam culpa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quasi
          </p>
          <p>
            sapiente fugit, quo minima reprehenderit laboriosam ipsa incidunt adipisci dignissimos
            mollitia libero est quaerat eveniet molestiae earum commodi magnam. Aliquid! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Commodi vel nulla, laboriosam ipsam
            obcaecati culpa odio facere et reiciendis voluptas pariatur sunt non. Distinctio quod
            laudantium molestiae qui fugit a. Lorem ipsum dolor sit amet consectetur adipisicing
          </p>
          <p>
            elit. Esse, laboriosam vitae alias explicabo autem quibusdam commodi officiis quis.
            Eligendi, cupiditate quaerat cumque nemo perspiciatis quibusdam dolore accusantium
            aliquid ut aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            nesciunt tempora rem modi quia nisi commodi perferendis harum dicta itaque illum
            voluptas ipsa porro omnis fugiat laudantium, obcaecati repellendus consequatur.
          </p>
          <div className={styles.npm}>
            <h5>Run in localhost:3000</h5>
            <p className={styles.note}>#With npm</p>
            <p>npm run dev</p>
            <p className={styles.note}>#With yarn</p>
            <p>yarn run dev</p>
          </div>
          <Button
            variant="contained"
            color="primary"
            onClick={() => router.push("/Content/helloworld")}
          >
            Next Page
          </Button>
        </div>
      </div>
    </>
  );
};

export default GettingStarted;
