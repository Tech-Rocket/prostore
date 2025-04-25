"use server";

import { PrismaClient } from "../generated/prisma";
import { convertToPlainObj } from "../utils";

// get latest product
export async function getLatestProducts() {
  const prisma = new PrismaClient();

  const data = await prisma.product.findMany({
    take: 4,
    orderBy: { createdAt: "desc" },
  });

  return convertToPlainObj(data);
}
