import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createTheme, NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Layout } from "@/components/navbar/layout";
import { SSRProvider } from "@react-aria/ssr";
  


const darkTheme = createTheme({
  type: "dark",
  theme: {
    colors: {},
  },
});
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{
        dark: darkTheme.className,
      }}
    >
      {" "}
      <NextUIProvider theme={darkTheme}>
        <SSRProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SSRProvider>
      </NextUIProvider>
    </NextThemesProvider>
  );
}

export default MyApp;
