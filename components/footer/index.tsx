import {Divider, Text, Grid} from '@nextui-org/react';
import React from 'react';
import { Image } from '@nextui-org/react';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';
import Link from 'next/link';
export const Footer = () => {
   return (
     <Flex
       css={{
 
       }}
     >
       <Divider css={{ position: "absolute", inset: "0p", left: "0" }} />
       <Box as={"footer"} css={{ width: "100%" , margin:'auto'}}>
         <Box
           css={{
             px: "$12",
             "@md": {
               px: "$20",
             },
           }}
         >
           <Flex
             align={"center"}
             wrap={"wrap"}
             css={{
               justifyContent: "center",
               "@md": {
                 justifyContent: "space-around",
               },
             }}
           >
             <Flex
             
               wrap={"wrap"}
             >
               <Image
                 width={170}
                 height={100}
                 src="/logo.svg"
                 alt="logo"
                 objectFit="contain"
               />
             </Flex>
             <Flex
               css={{
                 gap: "$10",
               }}
             >
               <Link href="/terms-of-service">
                 <Text span css={{ color: "$accents8", cursor: "pointer" }}>
                   Terms of Service
                 </Text>
               </Link>
               <Link href="/privacy-policy">
                 <Text span css={{ color: "$accents8", cursor: "pointer" }}>
                   Privacy Policy
                 </Text>
               </Link>
             </Flex>
             <Flex css={{ textAlign: "center" }}>
               <Text span>© Copyright 2023 VALUE1ST Inc.</Text>
             </Flex>
           </Flex>
           <Grid.Container
             alignItems="center"
             justify="center"
             css={{
               width: "50%",
               margin:'auto',
               "@sm": {
                 width: "100%",
               },
               "&  span": {
                 whiteSpace: "pre",
               },
             }}
           >
             <Grid sm={3} justify="center">
               <Flex align={"center"} justify={"center"}>
                 <Image
                   width={100}
                   height={100}
                   src="/visa.svg"
                   alt="payment methods"
                   objectFit="contain"
                 />
               </Flex>
             </Grid>
             <Grid sm={3} justify="center">
               <Flex align={"center"} justify={"center"}>
                 <Image
                   width={100}
                   height={100}
                   src="/mastercard.svg"
                   alt="payment methods"
                   objectFit="contain"
                 />
               </Flex>
             </Grid>
           </Grid.Container>
         </Box>
       </Box>
     </Flex>
   );
};
