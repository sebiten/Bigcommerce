import Head from "next/head";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home page" />
      </Head>

      <h1 className={styles.red}>Heloo</h1>
    </>
  );
}
