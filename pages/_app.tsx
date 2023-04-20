import "../styles/globals.css";
import Layout from "../components/UI/Layout";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "../styles/themes";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ApolloProvider } from "@apollo/client";
import { client } from "../graphql/apollo";
import { variants } from "../styles/animation-variants";
import { AppProps } from "next/app";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
function MyApp({ Component, pageProps, router }: AppProps) {
  const [theme, setTheme] = useState("light");
  const themeToggle = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE}`}
      />

      <Script id="my-script" strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE}', {
              page_path: window.location.pathname,
            });
                `}
      </Script>
      <Head>
        <title>Sebx - Frontend Developer</title>
        <meta name="description" content="My personal website and blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
          <GlobalStyles />
          <Layout themeToggle={themeToggle} theme={theme}>
            <AnimatePresence
              exitBeforeEnter
              initial={false}
              onExitComplete={() => window.scrollTo(0, 0)}
            >
              <motion.div
                key={router.route}
                initial="hidden"
                animate="enter"
                exit="exit"
                variants={variants}
                transition={{ type: "linear" }}
              >
                <Component {...pageProps} />

                <Analytics />
              </motion.div>
            </AnimatePresence>
          </Layout>
        </ThemeProvider>
      </ApolloProvider>
    </>
  );
}

export default MyApp;
