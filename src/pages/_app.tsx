import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Header } from "../components/Header/Header";
import { ProductsProvider } from "../ProductsContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ProductsProvider>
      <Header />
      <Component {...pageProps} />
    </ProductsProvider>
  );
}

export default MyApp;
