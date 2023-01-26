import {Divider, Grid, Text} from '@nextui-org/react';
import React from 'react';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';
import { Image } from "@nextui-org/react";
const Fade = require("react-reveal/Fade");
const Bounce = require("react-reveal/Bounce");
const Pulse = require("react-reveal/Pulse");

export const Features1 = () => {
   return (
     <>
       <Flex
         direction={"column"}
         css={{
           gap: "1rem",
           pt: "$20",
           justifyContent: "center",
           alignItems: "center",
           px: "$6",
           "@sm": {
             justifyContent: "space-around",
             px: "$32",
             flexDirection: "row",
           },
           "@md": {
             px: "$64",
           },
         }}
       >
         <Flex direction="column">
           <Fade top>
             <Text
               h2
               css={{
                 letterSpacing: "0.1em",
                 textGradient: "45deg, #FF5F1F -20%, #FF872A 50%",
               }}
             >
               VALUE1ST Features
             </Text>

             <Flex
               css={{
                 py: "$10",
                 gap: "$5",
                 alignItems: "center",
               }}
             >
               <Box
                 css={{
                   width: "2em",
                 }}
               >
                 {" "}
                 <Image src="/check.png" alt="" />
               </Box>
               <Flex direction={"column"}>
                 <Text
                   span
                   css={{
                     maxWidth: "400px",
                     color: "$accents8",
                   }}
                 >
                   An analysis of the history of your business.
                 </Text>
               </Flex>
             </Flex>
             <Flex
               css={{
                 py: "$10",
                 gap: "$5",
                 alignItems: "center",
               }}
             >
               <Box
                 css={{
                   width: "2em",
                 }}
               >
                 {" "}
                 <Image src="/check.png" alt="" />
               </Box>
               <Flex direction={"column"}>
                 <Text
                   span
                   css={{
                     maxWidth: "400px",
                     color: "$accents8",
                   }}
                 >
                   The perfect plan that will meet your goals.
                 </Text>
               </Flex>
             </Flex>

             <Flex
               css={{
                 py: "$10",
                 gap: "$5",
                 alignItems: "center",
               }}
             >
               <Box
                 css={{
                   width: "2em",
                 }}
               >
                 {" "}
                 <Image src="/check.png" alt="" />
               </Box>
               <Flex direction={"column"}>
                 <Text
                   span
                   css={{
                     maxWidth: "400px",
                     color: "$accents8",
                   }}
                 >
                   Operative campaigns that deliver consistent results.
                 </Text>
               </Flex>
             </Flex>
             <Flex
               css={{
                 py: "$10",
                 gap: "$5",
                 alignItems: "center",
               }}
             >
               <Box
                 css={{
                   width: "2em",
                 }}
               >
                 {" "}
                 <Image src="/check.png" alt="" />
               </Box>
               <Flex direction={"column"}>
                 <Text
                   span
                   css={{
                     maxWidth: "400px",
                     color: "$accents8",
                   }}
                 >
                   Collect real data to continuously boost your revenue.
                 </Text>
               </Flex>
             </Flex>
           </Fade>
         </Flex>
         <Flex align={"center"}>
           <Flex align={"center"} justify={"center"}>
             <Pulse>
               <Image
                 width={500}
                 height={500}
                 src="/adsleads.svg"
                 alt="Default Image"
                 objectFit="contain"
               />
             </Pulse>
           </Flex>{" "}
         </Flex>
       </Flex>
       <Divider
         css={{ position: "absolute", inset: "0p", left: "0", mt: "$5" }}
       />
     </>
   );
};
