import {Button, Divider, Text} from '@nextui-org/react';
import React from 'react';
import {BoxIcon} from '../icons/BoxIcon';
import {Flex} from '../styles/flex';
import { Image } from "@nextui-org/react";

export const Features2 = () => {
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
             gap: "5rem",
             flexDirection: "row-reverse",
             px: "$16",
           },
           "@md": {
             justifyContent: "space-evenly",
           },
         }}
       >
         <Flex direction="column" align={"center"}>
           <Text span css={{ color: "$blue600" }}></Text>
           <Text h3>VALUE1ST</Text>
           <Text
             span
             css={{
               maxWidth: "400px",
               color: "$accents8",
             }}
           >
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
             condimentum, nisl ut aliquam lacinia, nisl nisl aliquet nisl, nec
             tincidunt nisl lorem eu nunc. Sed euismod, nisl ut aliquam lacinia,
           </Text>

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
               }}
             >
               <BoxIcon />
               <Flex direction={"column"}>
                 <Text h4 weight={"medium"}>
                   VALUE1ST
                 </Text>
                 <Text
                   span
                   css={{
                     maxWidth: "325px",
                     color: "$accents8",
                   }}
                 >
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                   condimentum, nisl ut aliquam lacinia, nisl nisl aliquet nisl,
                 </Text>
               </Flex>
             </Flex>
             <Flex
               css={{
                 py: "$10",
                 gap: "$5",
               }}
             >
               <BoxIcon />
               <Flex direction={"column"}>
                 <Text h4 weight={"medium"}>
                   VALUE1ST
                 </Text>
                 <Text
                   span
                   css={{
                     maxWidth: "325px",
                     color: "$accents8",
                   }}
                 >
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                   condimentum, nisl ut aliquam lacinia, nisl nisl aliquet nisl,
                 </Text>
               </Flex>
             </Flex>
           </Flex>
         </Flex>
         <Flex align={"center"}>
           <Flex align={"center"} justify={"center"}>
             <Image
               width={500}
               height={500}
               src="/stats.png"
               alt="ads"
               objectFit="contain"
             />
           </Flex>{" "}
         </Flex>
       </Flex>

       <Divider
         css={{ position: "absolute", inset: "0p", left: "0", mt: "$5" }}
       />
     </>
   );
};
