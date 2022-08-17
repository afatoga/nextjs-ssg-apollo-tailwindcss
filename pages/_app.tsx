import { appWithTranslation } from "next-i18next";
import { AppContext, AppInitialProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../lib/apolloClient";
import { ThemeProvider } from "next-themes";

import "../css/tailwind.css";
// import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppContext & AppInitialProps) {
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default appWithTranslation(MyApp);
