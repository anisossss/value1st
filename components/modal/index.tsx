import React, { useState, useEffect } from "react";
import {
  Modal,
  Input,
  Row,
  Checkbox,
  Button,
  Text,
  Navbar,
  Grid,
} from "@nextui-org/react";
import axios from "axios";

export const ModalLogin = () => {
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
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  useEffect(() => {
    if (showMessage) {
      setTimeout(() => {
        setShowMessage(false);
      }, 8000); // 5 second delay
    }
  }, [showMessage]);
  return (
    <div>
      <Navbar.Link className="btnn" onClick={handler}>
        Book a demo
      </Navbar.Link>
      <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
        aria-label="Close"
      >
        <Modal.Header>
          <Text
            id="modal-title"
            size={22}
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
              value={project}
              clearable
              bordered
              fullWidth
              size="lg"
              placeholder="Subject"
              required
              onChange={(e) => setProject(e.target.value)}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button
              css={{
                margin: "auto",
                marginBottom: 20,
              }}
              className="btnn"
              type="submit"
            >
              Send
            </Button>
          </Modal.Footer>
        </form>
        {showMessage ? (
          <Grid
            css={{
              fontWeight:'bold',
              textGradient: "45deg, #23ff1f -20%, #1fff53 50%",
              padding: "1em",
            }}
          >
            {flashMessage}
          </Grid>
        ) : null}
      </Modal>
    </div>
  );
};
