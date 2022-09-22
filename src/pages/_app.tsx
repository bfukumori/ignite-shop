import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import { Layout } from "../components/Layout";

globalStyles();

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />;
    </Layout>
  );
}
