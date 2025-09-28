"use client"
import {products} from "@/lib/data";
import { ProductsT } from "@/lib/types";
import { useState } from "react";
import { Product } from "./Product";

export const Products = () => {
  const [items, setItems] = useState<ProductsT>(products);

  return (
    <div className="grid grid-cols-3 md:grid-cols-5 gap-4 p-4">
      {items.map((item) => (
        <Product key={item.id} {...item} />
      ))}
    </div>
  );
};