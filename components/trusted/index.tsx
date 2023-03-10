import { Button, Divider, Grid, Text } from "@nextui-org/react";
import React from "react";
import { Image } from "@nextui-org/react";
import { Flex } from "../styles/flex";

export const Trusted = () => {
  return (
    <>
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
        <Text h2 css={{ textAlign: "center" }}>
          Trusted by over 10000+ customers
        </Text>
        <Text
          css={{
            color: "$accents8",
            maxWidth: "800px",
            textAlign: "center",
          }}
          weight="normal"
          size={"$lg"}
        >
          At VALUE1ST, we collaborate with a very specific type of client.
        </Text>
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
          <Grid sm={3} justify="center">
            <Flex align={"center"}>
              <Image
                width={170}
                height={100}
                src="/logo.svg"
                alt="Default Image"
                objectFit="contain"
              />
            </Flex>
          </Grid>
          <Grid sm={3} justify="center">
            <Flex align={"center"}>
              <Image
                width={170}
                height={100}
                src="/logo.svg"
                alt="Default Image"
                objectFit="contain"
              />
            </Flex>
          </Grid>
          <Grid sm={3} justify="center">
            <Flex align={"center"}>
              <Image
                width={170}
                height={100}
                src="/logo.svg"
                alt="Default Image"
                objectFit="contain"
              />
            </Flex>
          </Grid>
          <Grid sm={3} justify="center">
            <Flex align={"center"}>
              <Image
                width={170}
                height={100}
                src="/logo.svg"
                alt="Default Image"
                objectFit="contain"
              />
            </Flex>
          </Grid>
          <Grid sm={3} justify="center">
            <Flex align={"center"}>
              <Image
                width={170}
                height={100}
                src="/logo.svg"
                alt="Default Image"
                objectFit="contain"
              />
            </Flex>
          </Grid>
          <Grid sm={3} justify="center">
            <Flex align={"center"}>
              <Image
                width={170}
                height={100}
                src="/logo.svg"
                alt="Default Image"
                objectFit="contain"
              />
            </Flex>
          </Grid>
          <Grid sm={3} justify="center">
            <Flex align={"center"}>
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
      </Flex>

      <Divider
        css={{ position: "absolute", inset: "0p", left: "0", mt: "$5" }}
      />
    </>
  );
};
