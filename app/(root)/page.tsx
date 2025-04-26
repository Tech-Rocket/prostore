import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.action";

export default async function HomePage() {
  const latestProducts = await getLatestProducts();
  return (
    <>
      <div className="mb-8">
        <ProductList data={latestProducts} title="Newest Arrival" limit={4} />
      </div>
    </>
  );
}
