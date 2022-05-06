import Link from "next/link";
import { useContext } from "react";
import { ProductsContext } from "../../ProductsContext";
import header from "./Home.module.css";

export function Header() {
  const { count } = useContext(ProductsContext);

  return (
    <div className={header.container}>
      <ul className={header.ul}>
        <li>
          <Link href="/">
            <a>Home {count}</a>
          </Link>
        </li>
        <li>
          <Link href="/produtos">
            <a>Produtos</a>
          </Link>
        </li>
        <li>
          <Link href="/produto">
            <a>Produto</a>
          </Link>
        </li>
        <li>
          <Link href="/checkout">
            <a>Checkout</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
