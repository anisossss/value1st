import type { NextPage } from "next";
import { Hero } from "@/components/hero";
import { Trusted } from "@/components/trusted";
import { Box } from "@/components/styles/box";
import { Features1 } from "@/components/features1";
import { Features2 } from "@/components/features2";
import { Features3 } from "@/components/features3";
import { Testimonials } from "@/components/tesminonials";
import { Statistics } from "@/components/statistics";
import { Trial } from "@/components/trial";
// import { Meta } from '../components/seo/index';
import React, { useEffect, useRef, useState } from "react";

import { Image } from "@nextui-org/react";
const Home: NextPage = () => {
  
   const [isVisible, setIsVisible] = useState(false);
   const socialMediaIconsRef = useRef<HTMLDivElement>(null);

   const handleScroll = () => {
     if (socialMediaIconsRef.current) {
       const { scrollHeight, clientHeight } = socialMediaIconsRef.current;
       if (scrollHeight - clientHeight <= window.scrollY) {
         setIsVisible(true);
       }
     }
   };

   useEffect(() => {
     window.addEventListener("scroll", handleScroll);
     return () => {
       window.removeEventListener("scroll", handleScroll);
     };
   }, []);
  return (
    <>
      {/* <Meta
        title=  "VALUE1ST"
        description="Value1st"
        ogUrl="https://valu&st.net"
        thumbnail="https://i.postimg.cc"
        keywords="marketing"
      ></Meta> */}
      <Box as="main">
        <Hero />
        <Trusted />
        <Features1 />
        <Features2 />
        <Testimonials />
        <Statistics />
        <Trial />
      </Box>
    

    </>
  );
};

export default Home;
