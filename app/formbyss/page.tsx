
import { revalidateTag } from "next/cache";
import {addProductToDatabase} from './action'
export interface Product {
  id?: number;
  product: string;
  price:string;
}

export default async function Home() {
  const res = await fetch('https://6560209c83aba11d99d041f7.mockapi.io/products',{
    cache:'no-cache',
    next: {
      tags:["products"],
    },
  })
  const products: Product[] = await res.json()
  //////////////creating a seperate file//////////////
  // const addProductToDatabase = async (e:FormData) => {
  //   'use server';
  //   const product = e.get("product")?.toString();
  //   const price = e.get("price")?.toString();

  //   if(!product || !price) return;

  //   const newProduct: Product = {
  //     product: product,
  //     price: price,
  //   };
  //   await fetch("https://6560209c83aba11d99d041f7.mockapi.io/products",{
  //     method: "POST",
  //     body:JSON.stringify(newProduct),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     }
  //   );
  //   revalidateTag('products')

  // }
  return ( 
    <main>
      <h1 className="text-3xl font-bold text-center">Product Warehouse</h1> 
      <form action={addProductToDatabase}>
        <input className="border border-gray-300 p-2 rounded-md" type="text" name='product' />
        <input className="border border-gray-300 p-2 rounded-md" type="text" name="price" />
        <button>Add Product</button>
      </form>

      <h2 className="text-3xl font-bold text-center">List of Product</h2>
      <div className="flex flex-wrap gap-5">
      {products.map((product) => (
        <div key={product.id} className="p-5 shadow">
          <p>{product.product}</p>
          <p>{product.price}</p>
        </div>
      ) )}
      
      </div>
      
    </main>
  );
}
