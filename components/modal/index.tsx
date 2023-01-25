import React, { useState } from "react";
import {
  Modal,
  Input,
  Row,
  Checkbox,
  Button,
  Text,
  Navbar,
} from "@nextui-org/react";
import axios from "axios";

export const ModalLogin = () => {
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://value1st-backend.vercel.app/api/contact",
        { email, subject }
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  return (
    <div>
      <Navbar.Link className="btn" onClick={handler}>
        Book a demo
      </Navbar.Link>
      <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text
            id="modal-title"
            size={20}
            css={{
              fontWeight: "bold",
              textGradient: "45deg, #FF5F1F -20%, #FF872A 50%",
            }}
          >
            Book a Demo
          </Text>
        </Modal.Header>
          <form onSubmit={handleSubmit}>

        <Modal.Body>
            <Input
              clearable
              bordered
              fullWidth
              size="lg"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
            <Input
              value={subject}
              clearable
              bordered
              fullWidth
              size="lg"
              placeholder="Subject"
              onChange={(e) => setSubject(e.target.value)}
            />
      
        </Modal.Body>
        <Modal.Footer>
          <Button
            css={{
              margin: "auto",
              marginBottom: 20,
            }}
            className="btn"
            type="submit"
          >
            Send
          </Button>
          </Modal.Footer>
          </form>
      </Modal>
    </div>
  );
};
