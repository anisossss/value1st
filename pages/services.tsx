import { Text, Grid} from '@nextui-org/react';
import React from 'react';
import Meta from "./seo/index";
import { Image } from "@nextui-org/react";
const Fade = require("react-reveal/Fade");

const Services = () => {
   return (
     <>
       <Meta
         title="Services - VALUE1ST"
         description="Our premium services at Value1st"
         ogUrl="https://valu&st.net/contact"
         thumbnail="https://i.postimg.cc"
       ></Meta>

       <Grid md={12} css={{ margin: "auto", width: "80%" }}>
         <Text
           h2
           css={{
             mt: "3em",
             textAlign: "center",
             letterSpacing: "0.1em",
             textGradient: "45deg, #FF5F1F 30%, #FF872A 50%",
             fontWeight: "bold",
           }}
         >
           Exlpore our services
         </Text>
         <Grid.Container
           css={{
             mt: "3em",

             margin: "auto",
             justifyContent: "center",
             alignItems: "center",
           }}
         >
           <Grid xs={12} md={6} direction="column">
               <Text
                 h3
                 css={{
                   letterSpacing: "0.1em",
                   textGradient: "45deg, #FF5F1F -20%, #FF872A 50%",
                   fontWeight: "bold",
                   textAlign: "left",
                 }}
               >
                 An analysis of the history of your business
               </Text>
               <Text>
                 would involve researching and studying the past performance,
                 strategies, and milestones of a company. This can provide
                 insight into what has worked well and what areas may need
                 improvement.
               </Text>
           </Grid>

           <Grid xs={12} md={6}>
               <Image
                 src="/statsrevenue.svg"
                 alt=""
                 width={300}
                 height={600}
                 objectFit="contain"
               ></Image>
           </Grid>
         </Grid.Container>
         <Grid.Container
           css={{
             margin: "auto",
             px: "$6",
             justifyContent: "center",
             alignItems: "center",
           }}
         >
           <Grid xs={12} md={6}>
             <Fade left>
               <Image
                 src="/stats.svg"
                 alt=""
                 width={400}
                 height={600}
                 objectFit="contain"
               ></Image>
             </Fade>
           </Grid>
           <Grid xs={12} md={6} direction="column">
             <Fade right>
               <Text
                 h3
                 css={{
                   letterSpacing: "0.1em",
                   textGradient: "45deg, #FF5F1F -20%, #FF872A 50%",
                   textAlign: "left",
                   fontWeight: "bold",
                 }}
               >
                 The perfect plan that will meet your goals
               </Text>
               <Text>
                 would be a comprehensive strategy that aligns with the
                 company&apos;s overall vision and objectives, and takes into
                 account any potential obstacles or challenges.
               </Text>
             </Fade>
           </Grid>
         </Grid.Container>
         <Grid.Container
           css={{
             margin: "auto",
             px: "$6",
             justifyContent: "center",
             alignItems: "center",
           }}
         >
           <Grid xs={12} md={6} direction="column">
             <Fade left>
               <Text
                 h3
                 css={{
                   letterSpacing: "0.1em",
                   textGradient: "45deg, #FF5F1F -20%, #FF872A 50%",
                   textAlign: "left",
                   fontWeight: "bold",
                 }}
               >
                 Operative campaigns that deliver consistent results
               </Text>
               <Text>
                 Operative campaigns are specific marketing efforts or
                 initiatives that are actively being implemented to achieve
                 specific goals. These campaigns should be well-planned and
                 executed, and should deliver consistent results over time.
               </Text>
             </Fade>
           </Grid>
           <Grid xs={12} md={6}>
             <Fade right>
               <Image
                 src="/adsleads.svg"
                 alt=""
                 width={500}
                 height={600}
                 objectFit="contain"
               ></Image>
             </Fade>
           </Grid>
         </Grid.Container>
         <br></br>
         <Grid.Container
           css={{
             margin: "auto",
             px: "$6",
             justifyContent: "center",
             alignItems: "center",
           }}
         >
           <Grid xs={12} md={6}>
             <Fade left>
               <Image
                 src="/revenue.svg"
                 alt=""
                 width={300}
                 height={600}
                 objectFit="contain"
               ></Image>
             </Fade>
           </Grid>
           <Grid xs={12} md={6} direction="column">
             <Fade right>
               <Text
                 h3
                 css={{
                   letterSpacing: "0.1em",
                   textGradient: "45deg, #FF5F1F -20%, #FF872A 50%",
                   textAlign: "left",
                   fontWeight: "bold",
                 }}
               >
                 Collect real data to continuously boost your revenue
               </Text>
               <Text>
                 Collecting real data refers to gathering information about
                 customer behavior, market trends, and other relevant metrics to
                 inform decision-making and continuously boost revenue. This can
                 be done through market research, surveys, and other
                 data-gathering methods.
               </Text>
             </Fade>
           </Grid>
         </Grid.Container>
         <br></br>
         <br></br> <br></br>
       </Grid>
     </>
   );
};
export async function getStaticProps() {
  return { props: {} };
}
export default Services;