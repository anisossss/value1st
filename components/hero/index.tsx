import {Button, Divider, Input, Text} from '@nextui-org/react';
import React, {useState} from 'react';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';
import { Image } from "@nextui-org/react";
import Link from 'next/link';
const Bounce = require("react-reveal/Bounce");
const Fade = require("react-reveal/Fade");

export const Hero = () => {
 
  
   return (
     <>
       <Flex
         css={{
           gap: "$24",
           px: "$16",
           flexDirection: "column",
           alignContent: "center",
           justifyContent: "center",
           alignItems: "center",
           width: "100%",
           "@sm": {
             flexDirection: "row",
           },
         }}
         justify={"center"}
       >
         <Box
           css={{
             pt: "10em",
             display: "flex",
             flexDirection: "column",
             gap: "$5",
           }}
         >
           <Box
             css={{
               maxWidth: "600px",
             }}
           >
             <Fade top>
               <Text
                 h1
                 css={{
                   display: "inline",
                 }}
               >
                 Looking to Generate More Leads and Sales{" "}
               </Text>
             </Fade>

             <Bounce top>
               <Text
                 h1
                 css={{
                   display: "inline",
                   textGradient: "45deg, #FF5F1F -20%, #FF872A 50%",
                 }}
               >
                 Through Online Marketing?
               </Text>
             </Bounce>
           </Box>
           <Text
             css={{
               color: "$accents8",
               maxWidth: "400px",
             }}
             size={"$lg"}
             span
           >
             Leave It to Us.
           </Text>
           <Flex
             css={{
               gap: "$8",
               pt: "$4",
             }}
             wrap={"wrap"}
           >
             <Link href="/services">
               <button className="btn2">Explore our services</button>
             </Link>
           </Flex>
           <br></br>
         </Box>

         <Box
           css={{
             "& img": {
               margin:'auto',
               width: "475px",
               objectFit: "contain",
             },
           }}
         >
           <Fade top>
             <Image
               src="/landing.svg"
               alt=""
               width={350}
               height={400}
             />
           </Fade>
         </Box>
       </Flex>
       <Divider
         css={{ position: "absolute", inset: "0p", left: "0", mt: "$10" }}
       />
     </>
   );
};
