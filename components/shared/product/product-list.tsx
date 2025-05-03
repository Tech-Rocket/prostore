import ProductCard from "./product-card";
import { ProductTypes } from "@/types";

export default function ProductList(props: {
  data: ProductTypes[];
  title?: string;
  limit?: number;
}) {
  const limitedData = props.limit
    ? props.data.slice(0, props.limit)
    : props.data;
  return (
    <div className="my-10 max-w-7xl lg:mx-auto">
      <h2 className="font-bold text-2xl lg:text-3xl mb-4">{props.title}</h2>

      {props.data.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {limitedData.map((product: ProductTypes) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      ) : (
        <div>
          <p>No product found</p>
        </div>
      )}
    </div>
  );
}
