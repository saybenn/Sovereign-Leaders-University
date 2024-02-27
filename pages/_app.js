import "@/styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import { HelmetProvider } from "react-helmet-async";

export default function App({ Component, pageProps }) {
  return (
    <HelmetProvider>
      <Component {...pageProps} />
    </HelmetProvider>
  );
}

