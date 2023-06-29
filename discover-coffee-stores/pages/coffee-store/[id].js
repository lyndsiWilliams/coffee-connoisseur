import { useRouter } from "next/router";
import Link from "next/link";

const CoffeeStore = () => {
  const router = useRouter();
  const dynamicRoute = `/coffee-store/${router.query.id}-1`;
  return (
    <div>
      Coffee Store Page {router.query.id}
      <Link href="/">Back to home</Link>
      <Link href={dynamicRoute}>Add -1 to this page</Link>
    </div>
  );
};

export default CoffeeStore;
