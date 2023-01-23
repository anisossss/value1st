import {Button, Divider, Text} from '@nextui-org/react';
import React, { useState, useEffect } from "react";
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';

export const Statistics = () => {
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);
    const [counter3, setCounter3] = useState(0);
    const maxCount1 = 500;
    const maxCount2 = 120;
    const maxCount3 = 50;
    useEffect(() => {
      const interval1 = setInterval(() => {
        if (counter1 < maxCount1) {
          setCounter1((counter1) => counter1 + 1);
        } else {
          clearInterval(interval1);
        }
      }, 1);
      const interval2 = setInterval(() => {
        if (counter2 < maxCount2) {
          setCounter2((counter2) => counter2 + 1);
        } else {
          clearInterval(interval2);
        }
      }, 1);
      const interval3 = setInterval(() => {
        if (counter3 < maxCount3) {
          setCounter3((counter3) => counter3 + 1);
        } else {
          clearInterval(interval3);
        }
      }, 1);
      return () => {
        clearInterval(interval1);
        clearInterval(interval2);
        clearInterval(interval3);
      };
    }, [counter1, counter2, counter3]);
  return (
    <>
      <Box
        css={{
          pt: "$20",
          pb: "$16",
          px: "$6",
        }}
      >
        <Flex direction={"column"} align={"center"}>
          <Text
            h3
            css={{
              textAlign: "center",
            }}
          >
            Over 8000+ projects completed
          </Text>
          <Text
            span
            css={{
              maxWidth: "800px",
              textAlign: "center",
            }}
          >
          Our statistics on the best quality
          </Text>
        </Flex>
        <Flex
          direction={"row"}
          wrap={"wrap"}
          justify={"center"}
          css={{
            gap: "4rem",
            pt: "$16",
            "@sm": {
              gap: "10rem",
            },
          }}
        >
          <Flex direction={"column"}>
            <Text
              h2
              css={{
                display: "inline",
                textGradient: "45deg, #FF5F1F -30%, #FF872A 50%",
              }}
            >
              ${counter1}K+
            </Text>
            <Text span css={{ textAlign: "center" }} weight={"medium"}>
              Revenue
            </Text>
          </Flex>
          <Flex direction={"column"}>
            <Text
              h2
              css={{
                display: "inline",
                textGradient: "45deg, #FF5F1F -30%, #FF872A 50%",
              }}
            >
              {counter2}+
            </Text>
            <Text span css={{ textAlign: "center" }} weight={"medium"}>
              Products
            </Text>
          </Flex>
          <Flex direction={"column"}>
            <Text
              h2
              css={{
                display: "inline",
                textGradient: "45deg, #FF5F1F -20%, #FF872A 50%",
              }}
            >
              {counter3}+
            </Text>
            <Text span css={{ textAlign: "center" }} weight={"medium"}>
              Projects
            </Text>
          </Flex>
        </Flex>
      </Box>

      <Divider
        css={{ position: "absolute", inset: "0p", left: "0", mt: "$5" }}
      />
    </>
  );
};
