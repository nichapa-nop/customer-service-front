// "use client";

// import { Modal, Button, Text, Input, Row, Checkbox } from "@nextui-org/react";

// // import Modal from "@/components/modal/modal";
// import React, { useState } from "react";

// export default function TestModal() {
//   const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
//   return (
//     <div className="">
//       <button
//         onClick={() => {
//           setIsModalOpen(!isModalOpen);
//         }}
//       >
//         Click for open modal
//       </button>
//       <Modal
//         closeButton
//         aria-labelledby="modal-title"
//         open={visible}
//         onClose={closeHandler}
//       >
//         <Modal.Header>
//           <Text id="modal-title" size={18}>
//             Welcome to
//             <Text b size={18}>
//               NextUI
//             </Text>
//           </Text>
//         </Modal.Header>
//         <Modal.Body>
//           <Input
//             clearable
//             bordered
//             fullWidth
//             color="primary"
//             size="lg"
//             placeholder="Email"
//             contentLeft={<Mail fill="currentColor" />}
//           />
//           <Input
//             clearable
//             bordered
//             fullWidth
//             color="primary"
//             size="lg"
//             placeholder="Password"
//             contentLeft={<Password fill="currentColor" />}
//           />
//           <Row justify="space-between">
//             <Checkbox>
//               <Text size={14}>Remember me</Text>
//             </Checkbox>
//             <Text size={14}>Forgot password?</Text>
//           </Row>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button auto flat color="error" onPress={closeHandler}>
//             Close
//           </Button>
//           <Button auto onPress={closeHandler}>
//             Sign in
//           </Button>
//         </Modal.Footer>
//       </Modal>
//       {/* <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
//         A
//       </Modal> */}
//     </div>
//   );
// }

"use client";

import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  // useDisclosure,
} from "@nextui-org/react";

export default function App() {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  // const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <button
        onClick={() => {
          setIsOpenModal(true);
        }}
      >
        Open Modal
      </button>
      <Modal isOpen={isOpenModal} onOpenChange={setIsOpenModal}>
        <ModalContent className=" bg-red-300 m-10 p-3">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-center">
                Create Ticket
              </ModalHeader>
              <ModalBody className="bg-yellow-200">
                <div className="bg-blue-300 ">Customer Info</div>
                <div className=" bg-pink-300">System Info</div>
                <div className=" bg-green-300">General Info</div>
                <div className=" bg-cyan-300">CS Info</div>
              </ModalBody>
              <ModalFooter>
                {/* <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button> */}
                <Button
                  color="primary"
                  onPress={onClose}
                  className="bg-slate-500 rounded-[20px] w-[150px]"
                >
                  Create Ticket
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
