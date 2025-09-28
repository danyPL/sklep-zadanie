import Image from "next/image";
import { Products } from "@/components/Products";
export default function Home() {
  return (
    <div className="font-sans flex flex-col items-center justify-items-center min-h-screen gap-4 sm:p-20">
    <h1 className="text-3xl font-bold">Sklep internetowy COD</h1>
    <Products/>
    </div>
  );
}
