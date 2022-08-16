import "../styles/globals.css";
import Layout from "../components/UI/Layout";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "../styles/themes";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ApolloProvider } from "@apollo/client";
import { client } from "../services/apollo";
import { variants } from "../styles/animation-variants";
import { AppProps } from "next/app";
function MyApp({ Component, pageProps, router }: AppProps) {
  const [theme, setTheme] = useState("light");
  const themeToggle = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <>
      <Head>
        <title>Sebx - Frontend Developer</title>
        <meta
          name="description"
          content="This is a desription for My Next App"
        />
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
              </motion.div>
            </AnimatePresence>
          </Layout>
        </ThemeProvider>
      </ApolloProvider>
    </>
  );
}

export default MyApp;
