import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import ProductPrice from "./product-price";

export default function ProductCard(props: { product: any }) {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="p-0 flex items-center justify-center">
        <Link href={`/product/${props.product.slug}`}>
          <Image
            src={props.product.images[0]}
            alt={props.product.name}
            height={220}
            width={220}
            priority={true}
            className="rounded-md"
          />
        </Link>
      </CardHeader>
      <CardContent className="p-4 grid gap-4">
        <div className="text-xs font-semibold text-green-600 uppercase">
          {props.product.brand}
        </div>
        <Link href={`/product/${props.product.slug}`}>
          <h2 className="text-sm font-medium">{props.product.name}</h2>
        </Link>

        <div className="flex-bewteen gap-4">
          <p>{props.product.rating} Stars</p>
          {props.product.stock > 0 ? (
            <p className="font-medium">
              <ProductPrice
                value={Number(props.product.price)}
                className="text-green-600"
              />
            </p>
          ) : (
            <p className="text-destructive">Out of Stock</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
