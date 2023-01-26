import {Button, Divider, Text} from '@nextui-org/react';
import React from 'react';
import {Flex} from '../styles/flex';
import { Image } from "@nextui-org/react";
const Fade = require("react-reveal/Fade");
import { Box } from "../styles/box";
import  Link  from 'next/link';
export const Features2 = () => {
   return (
     <>
       <Flex
         direction={"column"}
         css={{
           pt: "$20",
           justifyContent: "center",
           alignItems: "center",
           px: "$6",

           "@sm": {
             gap: "5rem",
             flexDirection: "row-reverse",
             px: "$16",
           },
           "@md": {
             justifyContent: "space-evenly",
           },
         }}
       >
         <Flex align={"center"}>
           <Flex align={"center"} justify={"center"}>
             <Fade top>
               <Image
                 height={400}
                 width={400}
                 src="/sales.svg"
                 alt="ads sales"
                 objectFit="contain"
               />
             </Fade>
           </Flex>{" "}
         </Flex>
         <Fade top>
           <Flex direction="column">
             <Text
               h2
               css={{
                 letterSpacing: "0.1em",
                 textGradient: "45deg, #FF5F1F -20%, #FF872A 50%",
                 textAlign: "center",
               }}
             >
               Our services
             </Text>
             <Text
               css={{
                 width: "90%",
                 textAlign: "justify",
                 margin: "auto",
               }}
             >
               We help our customers to create a comprehensive strategy for
               their social media presence, including identifying target
               audience, setting goals and objectives, and creating an action
               plan.
             </Text>
             <br></br>
             <Flex>
               <Link href="/services">
                 <button className="btnn">Explore our services</button>
               </Link>
             </Flex>
           </Flex>
         </Fade>

         <Flex align={"center"}>
           <Fade top>
             <Flex
               justify={"center"}
               wrap={"wrap"}
               css={{
                 py: "$10",
               }}
             >
               <Flex
                 css={{
                   py: "$10",
                   gap: "$5",
                   alignItems: "center",
                 }}
               >
                 <Box
                   css={{
                     width: "3em",
                   }}
                 >
                   {" "}
                   <Image src="/service3.png" alt="" />
                 </Box>
                 <Flex align={"center"} justify={"center"}>
                   <Text
                     span
                     css={{
                       maxWidth: "400px",
                       color: "$accents8",
                     }}
                   >
                     Social media management
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
                     width: "3em",
                   }}
                 >
                   {" "}
                   <Image src="/targetmarketing.png" alt="" />
                 </Box>
                 <Flex align={"center"} justify={"center"}>
                   <Text
                     span
                     css={{
                       maxWidth: "400px",
                       color: "$accents8",
                     }}
                   >
                     Influencer marketing
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
                     width: "3em",
                   }}
                 >
                   {" "}
                   <Image src="/marketing.png" alt="" />
                 </Box>
                 <Flex align={"center"} justify={"center"}>
                   <Text
                     span
                     css={{
                       maxWidth: "400px",
                       color: "$accents8",
                     }}
                   >
                     Paid advertising
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
                     width: "3em",
                   }}
                 >
                   {" "}
                   <Image src="/contentcreation.png" alt="" />
                 </Box>
                 <Flex direction={"column"}>
                   <Text
                     span
                     css={{
                       maxWidth: "400px",
                       color: "$accents8",
                     }}
                   >
                     Content creation
                   </Text>
                 </Flex>
               </Flex>
             </Flex>
           </Fade>
         </Flex>
       </Flex>

       <Divider
         css={{ position: "absolute", inset: "0p", left: "0", mt: "$5" }}
       />
     </>
   );
};
