import {Button, Divider, Input, Text} from '@nextui-org/react';
import React, {useState} from 'react';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';
import Image from 'next/image';
import axios from "axios";

const Bounce = require("react-reveal/Bounce");
const Fade = require("react-reveal/Fade");

export const Hero = () => {
   const [email, setEmail] = useState<string>("");

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
     e.preventDefault();
     try {
       const response = await axios.post(
         "https://value1st-backend.vercel.app/api/contact",
         { email }
       );
       console.log(response);
     } catch (error) {
       console.error(error);
     }
  };
  
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
             mt: "$20",
           },
         }}
         justify={"center"}
       >
         <Box
           css={{
             pt: "$13",

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
           <form onSubmit={handleSubmit}>
             <Flex
               css={{
                 gap: "$8",
                 pt: "$4",
               }}
               wrap={"wrap"}
             >
               <Input
                 placeholder="Enter your email address"
                 size="lg"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 required
               />

               <Button className="btn" type="submit">
                 Book a demo
               </Button>
             </Flex>
           </form>
           <br></br>
         </Box>

         <Box
           css={{
             "& img": {
               width: "775px",
               objectFit: "contain",
             },
           }}
         >
           <Fade top>
             <Image src="/landing.svg" alt="" width={500} height={400} />
           </Fade>
         </Box>
       </Flex>
       <Divider
         css={{ position: "absolute", inset: "0p", left: "0", mt: "$10" }}
       />
     </>
   );
};
