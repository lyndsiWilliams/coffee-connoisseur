import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";

const CoffeeStore = () => {
  const router = useRouter();
  const dynamicRoute = `/${router.query.id}-1`;
  return (
    <>
      <Head>
        <title>{router.query.id}</title>
      </Head>
      <div>
        Welcome to the {router.query.id} Page
        <Link href="/">Back to home</Link>
        <Link href={dynamicRoute}>Add -1 to this page</Link>
      </div>
    </>
  );
};

export default CoffeeStore;
