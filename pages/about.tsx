import {Divider, Text, Grid} from '@nextui-org/react';
import React from 'react';
import { Button} from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import { Flex } from "@/components/styles/flex";
import Meta from "./seo/index";
import { Features3 } from '@/components/features3';
const About = () => {

   return (
     <>
       <Meta
         title="About - VALUE1ST"
         description="About our company - Value1st"
         ogUrl="https://valu&st.net/about"
         thumbnail="https://i.postimg.cc/25GTB9cB/THUMBNAIL.png"
       ></Meta>
       <Features3 />

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
             <Text
               h1
               css={{
                 letterSpacing: "2px",
               }}
             >
               About Us
             </Text>
             <br></br> <br></br>
             <Text >
               At
               <Text
                 css={{
                   fontWeight: "bold",
                   display: "inline",
                   textGradient: "45deg, #FF5F1F -20%, #FF872A 50%",
                 }}
               >
                 &nbsp;VALUE1ST
               </Text>
               ,&nbsp; we understand the power of social media in today&apos;s
               digital landscape. Whether you&apos;re looking for help with
               social media advertising, content creation, or community
               management, we have the skills and experience to deliver results
               that matter.
               <Text>
                 Our team of experts specializes in creating and executing
                 effective social media marketing strategies that drive results
                 for businesses of all sizes.
               </Text>
               <Text>
                 We believe in the value of personalized, data-driven campaigns
                 that are tailored to the unique needs of our clients. From
                 increasing brand awareness to boosting sales, we help our
                 clients achieve their goals by leveraging the latest tools and
                 technologies in the industry.
               </Text>
               <Text>
                 Trust us to help you make the most of your social media
                 presence and connect with your audience in a meaningful way.
               </Text>
             </Text>
         </Flex>
         <Flex align={"center"}>
             <Image
               width={350}
               height={500}
               src="/statsrevenue.svg"
               alt="ads"
               objectFit="contain"
             />
         </Flex>
       </Flex>
     </>
   );
};
export async function getStaticProps() {
  return { props: {} };
}
export default About;


