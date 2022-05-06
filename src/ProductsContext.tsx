import { createContext, ReactNode, useEffect, useState } from "react";
// import fetch from "node-fetch";
import https from "https";

interface ProdProps {
  pdt_id: number;
  pdt_title: string;
  pdt_content: string;
  pdt_cover: string;
}

export interface Product {
  pdt_id: number;
  pdt_title: string;
  pdt_content: string;
  pdt_cover: string;
}

interface ProductsProviderProps {
  children: ReactNode;
}
interface CartContextData {
  count: number;
  increase: () => void;
  data: Product[];
}

export const ProductsContext = createContext<CartContextData>(
  {} as CartContextData
);

const handleProducts = async () => {
  const url =
    "https://localhost/sites/wc_aliancadistribuidora/products.php?api=products&page=1&cat=2&limit=10";
  const httpsAgent = new https.Agent({
    rejectUnauthorized: false,
  });

  const res = await fetch(url, {
    method: "POST",
    agent: httpsAgent,
  });

  const products = await res.json();
  const datas = products.map((el: ProdProps) => el);
  return datas;
};

export function ProductsProvider({ children }: ProductsProviderProps) {
  const [data, setData] = useState<Product[]>([]);
  const [count, setCounter] = useState(0);

  //increase counter
  const increase = () => {
    setCounter((count) => count + 1);
  };

  useEffect(() => {
    async function fetchData() {
      const newText = await handleProducts();
      setData(newText);
    }
    fetchData();
  }, []);

  return (
    <ProductsContext.Provider value={{ data, count, increase }}>
      {children}
    </ProductsContext.Provider>
  );
}
