import {Card, Divider, Text} from '@nextui-org/react';
import React from 'react';
import {BoxIcon} from '../icons/BoxIcon';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';

export const Features3 = () => {
   
   return (
     <>
       <Box
         css={{
           px: "$6",
           pb: "$14",
         }}
       >
         <Flex
           direction={"column"}
           justify={"center"}
           align={"center"}
           css={{
             pt: "$20",
           }}
         >
           <Text
             h2
             css={{
               letterSpacing: "0.1em",
               textGradient: "45deg, #FF5F1F -20%, #FF872A 50%",
               textAlign: "center",
               fontWeight:'bold'
             }}
           >
             VALUE1ST
           </Text>
           <Text
             span
             css={{
               maxWidth: "800px",
               color: "$accents8",
               textAlign: "center",
             }}
           >
             An analysis of the history of your business.
           </Text>
         </Flex>
         <Flex
           align={"center"}
           justify={"center"}
           wrap={"wrap"}
           css={{
             gap: "2rem",
             pt: "$14",
           }}
         >
           <Card css={{ h: "180px", w: "500px" }} className="card">
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             <Card.Body>
               <Flex css={{ gap: "0.5rem" }}>
                 <Flex direction={"column"}>
                   <Text span css={{ textAlign: "justify" }}>
                     Discover the journey of our business, from our humble
                     beginnings to our current success as a leader in the social
                     media marketing industry. Explore the milestones,
                     challenges, and achievements that have shaped our company
                     into the dynamic and innovative team it is today.
                   </Text>
                 </Flex>
               </Flex>
             </Card.Body>
           </Card>
           <Card className="card">
             <Card.Body>
               <Flex css={{ gap: "0.5rem" }}>
                 <Flex direction={"column"}>
                   <Text span>
                     Our team of experts will work with you to craft a tailored
                     plan that will meet your specific goals and objectives. Say
                     goodbye to cookie-cutter solutions and hello to a strategy
                     that is tailored to your unique needs.
                   </Text>
                 </Flex>
               </Flex>
             </Card.Body>
           </Card>
         </Flex>
         <Flex
           align={"center"}
           wrap={"wrap"}
           justify={"center"}
           css={{
             gap: "2rem",
             pt: "$8",
           }}
         >
           <Card  className="card">
             <Card.Body>
               <Flex css={{ gap: "0.5rem" }}>
                 <Flex direction={"column"}>
                   <Text span>
                     Experience the power of our data-driven campaigns that
                     consistently deliver results. Trust in our team&apos;s
                     expertise and proven track record for driving business
                     growth and success.
                   </Text>
                 </Flex>
               </Flex>
             </Card.Body>
           </Card>
           <Card  className="card">
             <Card.Body>
               <Flex css={{ gap: "0.5rem" }}>
                 <Flex direction={"column"}>
                   <Text span>
                     Unlock the full potential of your business with our
                     data-driven approach. By collecting and analyzing
                     real-world data, we&apos;ll help you make informed
                     decisions and continuously boost your revenue.
                   </Text>
                 </Flex>
               </Flex>
             </Card.Body>
           </Card>
         </Flex>
       </Box>
     </>
   );
};
