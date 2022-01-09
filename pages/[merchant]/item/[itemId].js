import { useRouter } from "next/router";

function Item() {
  const router = useRouter();
  const { merchant, itemId } = router.query;
  return (
    <h1>
      Item {itemId} for {merchant}
    </h1>
  );
}

export default Item;
