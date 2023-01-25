import { Button, Divider, Text, Input } from "@nextui-org/react";
import React, { useState }  from "react";
import { Flex } from "../styles/flex";
import { Checkbox } from "@nextui-org/react";
import axios from "axios";

export const Trial = () => {
 const [email, setEmail] = useState<string>("");

 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
   e.preventDefault();
   try {
     const response = await axios.post(
       "https://value1st-backend.vercel.app/api/subscribe",
       { email }
     );
     console.log(response);
   } catch (error) {
     console.error(error);
   }
 };

  return (
    <>
      <Flex
        css={{
          py: "$20",
          px: "$6",
        }}
        justify={"center"}
        direction={"column"}
        align={"center"}
      >
        <Text
          h3
          css={{
            display: "inline",
            textGradient: "45deg, #FF5F1F -20%, #FF872A 50%",
          }}
        >
          Stay up-to-date on the latest marketing trends and strategies at no
          cost.
        </Text>
        <br></br>
        <Text
          span
          css={{
            color: "$accents8",
            pb: "$15",
            textAlign: "left",
            lineHeight: 2,
          }}
        >
          <Checkbox defaultSelected color="warning">
            {" "}
            Receive personalized advice and recommendations for your business
            for free.
          </Checkbox>
          <br></br>
          <Checkbox color="warning">
            Learn from industry experts and gain new insights and inspiration
            for free.
          </Checkbox>
          <br></br>
          <Checkbox color="warning">
            Enhance your marketing skills and knowledge with daily tips and
            techniques for free.
          </Checkbox>
        </Text>
        <form onSubmit={handleSubmit}>
          <Flex
            css={{
              gap: "$8",
              pt: "$4",
            }}
            wrap={"wrap"}
          >
            <Input
              placeholder="Enter your email address"
              size="lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <Button type="submit" className="btn">
              Subscribe
            </Button>
          </Flex>
        </form>
      </Flex>
    </>
  );
};
