import {Divider, Text, Grid} from '@nextui-org/react';
import React from 'react';
import { Button} from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import { Flex } from "@/components/styles/flex";
import Meta from "./seo/index";
const Fade = require("react-reveal/Fade");

const About = () => {

   return (
     <>
       <Meta
         title="About - VALUE1ST"
         description="About our company Value1st"
         ogUrl="https://valu&st.net/about"
         thumbnail="https://i.postimg.cc/25GTB9cB/THUMBNAIL.png"
       ></Meta>
       <Flex
         direction={"column"}
         css={{
           gap: "1rem",
           pt: "$20",
           pb: "$20",
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
         <Flex
           direction="column"
           align={"center"}
           css={{
             width: "60%",
             textAlign: "justify",
           }}
         >
           <Fade top>
             <Text
               h1
               css={{
                 letterSpacing: "2px",
               }}
             >
               About Us
             </Text>
             <br></br> <br></br>
             <Text span>
               At
               <Text
                 css={{
                   fontWeight: "bold",
                   display: "inline",
                   textGradient: "45deg, #FF5F1F -20%, #FF872A 50%",
                 }}
               >
                 &nbsp; VALUE1ST
               </Text>
               , we collaborate with a very specific type of client. We aren’t
               your average agency next door begging for your money. Our
               unmatched strategies generate record-breaking amounts of dollars
               in
               <Text
                 css={{
                   fontWeight: "bold",
                   display: "inline",
                   textGradient: "45deg, #FF5F1F -20%, #FF872A 50%",
                 }}
               >
                 &nbsp; ad revenue.
               </Text>
             </Text>
           </Fade>

           <Fade top>
             <Flex direction={"column"}>
               <br></br>
               <Text span>
                 The difficulty is over in a second, the impossible is done
                 immediately, and miracles take a little longer. All you have to
                 do is to consider it done.
               </Text>
               <Text span>
                 <br></br>
                 Book a FREE appointment and we’ll offer you a deal you can’t
                 refuse.
               </Text>
             </Flex>
           </Fade>
         </Flex>
         <Flex align={"center"}>
           <Fade top>
             <Image
               width={350}
               height={500}
               src="/statsrevenue.svg"
               alt="ads"
               objectFit="contain"
             />
           </Fade>
         </Flex>
       </Flex>
     </>
   );
};

export default About;


