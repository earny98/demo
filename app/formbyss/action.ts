'use server';
import { revalidateTag } from "next/cache";
export interface Product {
    id?: number;
    product: string;
    price:string;
  }


 export async function addProductToDatabase(e:FormData) {
    const product = e.get("product")?.toString();
    const price = e.get("price")?.toString();

    if(!product || !price) return;

    const newProduct: Product = {
      product: product,
      price: price,
    };
    await fetch("https://6560209c83aba11d99d041f7.mockapi.io/products",{
      method: "POST",
      body:JSON.stringify(newProduct),
      headers: {
        "Content-Type": "application/json",
      },
      }
    );
    revalidateTag('products')

  }