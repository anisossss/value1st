import { Button, Divider, Grid, Text,  Input } from "@nextui-org/react";
import React, { useState, useEffect } from "react";
import { Image } from "@nextui-org/react";
import { Flex } from "@/components/styles/flex";
import Link from "next/link";
 import { useRouter } from "next/router";
import axios from "axios";

import Meta  from "./seo/index";
const Features = () => {
  const router = useRouter();
const [flashMessage, setFlashMessage] = useState("");
const [showMessage, setShowMessage] = useState(false);

const [email, setEmail] = useState<string>("");
const [project, setProject] = useState<string>("");

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  setFlashMessage("Demo Request Sent Successfully !");
  setShowMessage(true);
  e.preventDefault();
  try {
    const response = await axios.post(
      "https://value1st-backend.vercel.app/api/contact",
      { email, project }
    );
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};
useEffect(() => {
  if (showMessage) {
    setTimeout(() => {
      setShowMessage(false);
    }, 8000); // 5 second delay
  }
}, [showMessage]);
  return (
    <>
      <Meta
        title="Contact - VALUE1ST"
        description="Contact us or book a free Demo at Value1st"
        ogUrl="https://valu&st.net/contact"
        thumbnail="https://i.postimg.cc/25GTB9cB/THUMBNAIL.png"
      ></Meta>
      <Flex
        direction={"column"}
        align={"center"}
        css={{
          width: "100%",
          margin: "auto",
          pt: "$10",
          pb: "$60",
          px: "$6",
          "@md": {
            px: "$64",
          },
        }}
      >
        <Text h2>Contact Us</Text>
        <Text>
          Book your call with the CEO - Mahdi Fani Free, Short, Quick, and
          Effective Demo Call Who Would Benefit From This Audit Call?
          <br></br> <br></br>
          <li>Businesses looking to convert their offline business online.</li>
          <li>
            Businesses looking to upgrade their current website to a top-notch
            funnel format.
          </li>
          <li>
            Businesses looking to boost their revenue through paid advertising
            on social media.
          </li>
          <li>
            Businesses looking for a trustworthy agency that would prioritize
            their company.
          </li>
        </Text>
        <form onSubmit={handleSubmit} className="form">
          <Input
            clearable
            bordered
            fullWidth
            size="lg"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          <Input
            clearable
            bordered
            fullWidth
            size="lg"
            placeholder="Subject"
            required
            value={project}
            onChange={(e) => setProject(e.target.value)}
          />
          <Button
            type="submit"
            css={{
              margin: "auto",
            }}
            className="box"
          >
            Send
          </Button>
        </form>

        {showMessage ? (
          <Grid
            css={{
              fontWeight: "bold",
              textGradient: "45deg, #23ff1f -20%, #1fff53 50%",
              padding: "1em",
            }}
          >
            {flashMessage}
          </Grid>
        ) : null}
        <Grid
          className="social-btns"
          css={{
            justifyContent: "center",
            alignItems: "center",
            "@xs": {
              px: "$20",
              py: "$12",
            },
            "@sm": {
              gap: "5rem",
              px: "$20",
            },
            "@md": {
              justifyContent: "space-evenly",
            },
          }}
        >
          <Link href="https://www.instagram.com/value1st.agency/">
            <a className="btn" target="_blank" rel="noopener noreferrer">
              <Image src="/insta.png" alt="instagram" className="fa "></Image>
            </a>
          </Link>

          <Link href="https://calendly.com/value1st/demo">
            <a className="btn" target="_blank" rel="noopener noreferrer">
              <Image src="/calendar.png" alt="calendly" className="fa "></Image>
            </a>
          </Link>

          <a
            className="btn"
            onClick={() => router.push("mailto:agency@value1st.net")}
          >
            <a>
              <Image src="/email.png" alt="email" className="fa"></Image>
            </a>
          </a>
        </Grid>
      </Flex>
    </>
  );
};

export default Features;
