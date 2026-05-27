import type { Metadata } from "next";
import { ProductsClient } from "./ProductsClient";

export const metadata: Metadata = {
  title: "Products — MKS Exports",
  description:
    "Leather bags, belts, scarves, accessories — handcrafted in Kolkata. Browse our full range of products we can manufacture for your brand.",
};

export default function ProductsPage() {
  return <ProductsClient />;
}
