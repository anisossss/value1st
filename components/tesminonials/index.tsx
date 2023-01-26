import {Button, Card, Divider, Text} from '@nextui-org/react';
import React from 'react';
import {QuotesIcon} from '../icons/QuotesIcon';
import {Flex} from '../styles/flex';

export const Testimonials = () => {
   return (
     <>
       <Flex
         direction={"column"}
         css={{
           gap: "1rem",
           justifyContent: "center",
           alignItems: "center",
           px: "$6",
           py: "$20",
           flexDirection: "column-reverse",
           "@sm": {
             justifyContent: "space-around",
             px: "$32",
             flexDirection: "row-reverse",
           },
           "@md": {
             px: "$64",
           },
         }}
       >
         <Flex direction="column" css={{ gap: "1.5rem" }}>
           <Card>
             <Card.Body>
               <Flex
                 css={{
                   py: "$10",
                   gap: "$5",
                 }}
               >
                 <QuotesIcon />
                 <Flex direction={"column"} css={{ gap: "0.5rem" }}>
                   <Text
                     span
                     css={{
                       maxWidth: "400px",
                       color: "$accents8",
                     }}
                   >
                     I have been working with VALUE1ST for the past 6 months and
                     have seen a significant increase in my social media
                     engagement and reach. Their team is incredibly
                     knowledgeable and responsive, and I highly recommend their
                     services to anyone looking to improve their social media
                     presence.
                   </Text>
                   <Text
                     span
                     weight={"bold"}
                     css={{
                       maxWidth: "400px",
                       display: "contents",
                       color: "$accents9",
                     }}
                   >
                     {" "}
                   </Text>
                   <Text
                     span
                     css={{
                       display: "contents",
                       color: "$accents8",
                     }}
                   >
                     - CEO at ValidPay
                   </Text>
                 </Flex>
               </Flex>
             </Card.Body>
           </Card>

           <Card>
             <Card.Body>
               <Flex
                 css={{
                   py: "$10",
                   gap: "$5",
                 }}
               >
                 <QuotesIcon />
                 <Flex direction={"column"} css={{ gap: "0.5rem" }}>
                   <Text
                     span
                     css={{
                       maxWidth: "400px",
                       color: "$accents8",
                     }}
                   >
                     I was hesitant to invest in social media advertising, but
                     after working with VALUE1ST, I am so glad that I did. They
                     created a targeted and effective campaign that led to a
                     noticeable increase in website traffic and sales. Thank
                     you!
                   </Text>
                   <Text
                     span
                     weight={"bold"}
                     css={{
                       maxWidth: "400px",
                       display: "contents",
                       color: "$accents9",
                     }}
                   >
                     {" "}
                   </Text>
                   <Text
                     span
                     css={{
                       display: "contents",
                       color: "$accents8",
                     }}
                   >
                     - Business Owner
                   </Text>
                 </Flex>
               </Flex>
             </Card.Body>
           </Card>

           <Card>
             <Card.Body>
               <Flex
                 css={{
                   py: "$10",
                   gap: "$5",
                 }}
               >
                 <QuotesIcon />
                 <Flex direction={"column"} css={{ gap: "0.5rem" }}>
                   <Text
                     span
                     css={{
                       maxWidth: "400px",
                       color: "$accents8",
                     }}
                   >
                     I am a small business owner and had no idea where to start
                     with my social media marketing. VALUE1ST helped me to
                     create a comprehensive strategy and execute it
                     successfully. I have seen a steady growth in my online
                     presence and customer base. I highly recommend them to any
                     small business looking to improve their social media
                     marketing.
                   </Text>
                   <Text
                     span
                     weight={"bold"}
                     css={{
                       maxWidth: "400px",
                       display: "contents",
                       color: "$accents9",
                     }}
                   >
                     {" "}
                   </Text>
                   <Text
                     span
                     css={{
                       display: "contents",
                       color: "$accents8",
                     }}
                   >
                     - Business Owner
                   </Text>
                 </Flex>
               </Flex>
             </Card.Body>
           </Card>
         </Flex>
         <Flex
           align={"start"}
           direction={"column"}
           css={{
             alignItems: "center",
             "@sm": {
               alignItems: "start",
             },
           }}
         >
           <Text
             h2
             css={{
               letterSpacing: "0.1em",
               textGradient: "45deg, #FF5F1F -20%, #FF872A 50%",
             }}
           >
             Testimonials
           </Text>
           <Text
             span
             css={{
               color: "$accents8",
               maxW: "600px",
               pb: "$8",
               lineHeight: "2em",
             }}
           >
             We take pride in the success of our clients and the positive impact
             we have on their businesses. We know that trust is built on the
             experience of others, and we are honored to share these
             testimonials from our valued clients. These are real stories of
             their experience working with us and the results they&apos;ve
             achieved. It&apos;s our hope that they will give you a sense of the
             level of service and expertise you can expect when working with us.
           </Text>
         </Flex>
       </Flex>

       <Divider
         css={{ position: "absolute", inset: "0p", left: "0", mt: "$5" }}
       />
     </>
   );
};
