import {Divider, Text, Grid} from '@nextui-org/react';
import React from 'react';
import { Button} from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import { Flex } from "@/components/styles/flex";
import { Meta } from "@/components/seo/Meta";

const About = () => {
   return (
     <>
       <Meta
         title="About - VALUE1ST"
         description="About our company Value1st"
         ogUrl="https://valu&st.net/about"
         thumbnail="https://i.postimg.cc/"
       ></Meta>
       <Flex
         direction={"column"}
         align={"center"}
         css={{
           pt: "$20",
           px: "$6",
           "@md": {
             px: "$64",
           },
         }}
       >
         <Grid.Container
           gap={6}
           alignItems="center"
           justify="center"
           css={{
             width: "100%",
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
                 width={170}
                 height={100}
                 src="/logo.svg"
                 alt="Default Image"
                 objectFit="contain"
               />
             </Flex>
           </Grid>
         </Grid.Container>

         <Text>
           At VALUE1ST, we collaborate with a very specific type of client. We
           aren’t your average agency next door begging for your money. Our
           unmatched strategies generate record-breaking amounts of dollars in
           ad revenue.
         </Text>
         <br></br>
         <Text>
           The difficulty is over in a second, the impossible is done
           immediately, and miracles take a little longer. All you have to do is
           to consider it done.
         </Text>
         <br></br>

         <Text>
           Book a FREE appointment and we’ll offer you a deal you can’t refuse.
         </Text>
         <br></br>
         <Button className="btn">Book a FREE Demo Call</Button>
       </Flex>
     </>
   );
};

export default About;



