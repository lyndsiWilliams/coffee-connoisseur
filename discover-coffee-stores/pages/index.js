import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Banner from "@/components/banner";

export default function Home() {
  const handleOnBannerBtnClick = () => console.log("hi banner button");

  return (
    <>
      <Head>
        <title>Coffee Connoisseur</title>
        <meta name="description" content="Discover your local coffee shops!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <div className={styles.center}>
          <Banner
            buttonText="View stores nearby"
            handleOnClick={handleOnBannerBtnClick}
          />
        </div>
      </main>
    </>
  );
}
