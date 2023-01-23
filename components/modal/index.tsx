import React from 'react';
import {
   Modal,
   Input,
   Row,
   Checkbox,
   Button,
   Text,
   Navbar,
} from '@nextui-org/react';

export const ModalLogin = () => {
   const [visible, setVisible] = React.useState(false);
   const handler = () => setVisible(true);
   const closeHandler = () => {
      setVisible(false);
      console.log('closed');
   };
   return (
      <div>
         <Navbar.Link  className='btn' onClick={handler}>Book a demo</Navbar.Link>
         <Modal
            closeButton
            blur
            aria-labelledby="modal-title"
            open={visible}
            onClose={closeHandler}
         >
            <Modal.Header>
               <Text id="modal-title" size={20}
                 css={{
                    fontWeight:"bold"   ,  
                    textGradient: "45deg, #FF5F1F -20%, #FF872A 50%",
                  }}
               >
                  Book a Demo
                  
               </Text>
            </Modal.Header>
            <Modal.Body>
               <Input
                  clearable
                  bordered
                  fullWidth
                  size="lg"
                  placeholder="Email"
               />
               <Input
                  clearable
                  bordered
                  fullWidth
                  size="lg"
                  placeholder="Subject"
               />
              
            </Modal.Body>
            <Modal.Footer>
            
               <Button
                     css={{
                     margin: "auto",
                        marginBottom:20
                  }}
                  className='btn' onClick={closeHandler}>
                  Send
               </Button>
            </Modal.Footer>
         </Modal>
      </div>
   );
};
