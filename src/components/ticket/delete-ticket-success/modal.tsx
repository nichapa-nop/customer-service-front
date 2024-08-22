"use client";
import {
  Description,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { motion } from "framer-motion";
import React, { Dispatch, SetStateAction } from "react";

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  onClose?: () => void;
}

const DeleteTicketSuccess: React.FC<Props> = ({
  isOpen,
  onClose,
  setIsOpen,
  // initialTicket
}) => {
  return (
    <>
      <Dialog
        open={isOpen}
        onClose={() => (onClose ? onClose() : setIsOpen(false))}
        className="relative z-50"
      >
        <DialogBackdrop className="fixed inset-0 bg-black/30" />

        <div className="fixed inset-0 w-screen overflow-y-auto p-1">
          <div className="flex min-h-full  items-center justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <DialogPanel className="bg-white w-[650px] h-[400px] border rounded-[20px] p-12 ">
                {/* <Description>
                This will permanently deactivate your account
              </Description> */}
                <div className="flex justify-center items-center mt-8 mb-6">
                  <img
                    src="/assets/images/success.png"
                    className="h-[100px] w-[100px] "
                  ></img>
                </div>

                <div className="flex flex-col h-[120px] rounded-xl items-center justify-center">
                  <p className="font-semibold text-[20px]  mb-3 text-center">
                    Ticket #INC000xx has been deleted
                  </p>
                  <p className=" text-[16px]  text-center">
                    You can review the updated ticket list in the 'Ticket
                    <br />
                    Management' section accessible via the sidebar.
                  </p>
                </div>
              </DialogPanel>
            </motion.div>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default DeleteTicketSuccess;
