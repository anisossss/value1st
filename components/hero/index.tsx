import {Button, Divider, Input, Text} from '@nextui-org/react';
import React from 'react';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';
import Image from 'next/image';

export const Hero = () => {
   return (
      <>
         <Flex
            css={{
               'gap': '$24',
               'px': '$16',
               'flexDirection': 'column',
               'alignContent': 'center',
               'justifyContent': 'center',
               'alignItems': 'center',
               'width': '100%',
               '@sm': {
                  flexDirection: 'row',
                  mt: '$20',
               },
            }}
            justify={'center'}
         >
            <Box
               css={{
                  pt: '$13',

                  display: 'flex',
                  flexDirection: 'column',
                  gap: '$5',
               }}
            >
               <Box
                  css={{
                     maxWidth: '600px',
                  }}
               >
                  <Text
                     h1
                     css={{
                        display: 'inline',
                     }}
                  >
                    Looking to Generate More Leads and Sales {' '}
                  </Text>
                  <Text
                     h1
                     css={{
                        display: 'inline',
                     }}
                  >
                     for{' '}
                  </Text>
                  <Text
                     h1
                     css={{
                        display: 'inline',
                         textGradient: "45deg, #FF5F1F -20%, #FF872A 50%",
                     }}

                  >
                     Through Online Marketing?
                  </Text>
               </Box>

               <Text
                  css={{
                     color: '$accents8',
                     maxWidth: '400px',
                  }}
                  size={'$lg'}
                  span
               >

Leave It to Us.

               </Text>

               <Flex
                  css={{
                     gap: '$8',
                     pt: '$4',
                  }}
                  wrap={'wrap'}
               >
                  <Input placeholder="Enter your email address" size="lg" />

                  <Button className='btn' 
                   >Book a demo</Button>
               </Flex>
          <br></br>
            </Box>
            <Box
               css={{
                  '& img': {
                     width: '775px',
                     objectFit: 'contain',
                  },
               }}
            >
               <Image src="/landing.svg" alt=''
                  width={500}
               height={400}/>
            </Box>
         </Flex>
         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$10'}}
         />
      </>
   );
};
