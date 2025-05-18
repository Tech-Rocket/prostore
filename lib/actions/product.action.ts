"use server";

import { prisma } from "@/db/prisma";
import { convertToPlainObj } from "../utils";
import { LATEST_PRODUCTS_LIMIT } from "../constants";

// get latest product
export async function getLatestProducts() {
  const data = await prisma.product.findMany({
    take: LATEST_PRODUCTS_LIMIT,
    orderBy: { createdAt: "desc" },
  });

  return convertToPlainObj(data);
}
