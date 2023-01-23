import '../styles/globals.css';
import type {AppProps} from 'next/app';
import {createTheme, NextUIProvider} from '@nextui-org/react';
import {ThemeProvider as NextThemesProvider} from 'next-themes';
import { Layout } from '@/components/navbar/layout';
const lightTheme = createTheme({
   type: 'light',
   theme: {
      colors: {},
   },
});

const darkTheme = createTheme({
   type: 'dark',
   theme: {
      colors: {},
   },
});

function MyApp({Component, pageProps}: AppProps) {
   return (
     <NextThemesProvider
       defaultTheme="system"
       attribute="class"
       value={{
         light: lightTheme.className,
         dark: darkTheme.className,
       }}
     >
       <Layout>
         <NextUIProvider>
           <Component {...pageProps} />
         </NextUIProvider>
       </Layout>
     </NextThemesProvider>
   );
}

export default MyApp;
