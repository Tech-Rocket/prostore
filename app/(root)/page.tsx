import sampleData from "@/db/sample-data";
import ProductList from "@/components/shared/product/product-list";

export default async function HomePage() {
  return (
    <>
      <ProductList
        data={sampleData.products}
        title="Newest Arrival"
        limit={4}
      />
    </>
  );
}
