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

const CreateAccountSuccess: React.FC<Props> = ({
  isOpen,
  onClose,
  setIsOpen,
  // initialAccount
}) => {
  return (
    <>
      <Dialog
        open={isOpen}
        onClose={() => {
          onClose ? onClose() : setIsOpen(false);
        }}
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
                <div className="relative flex items-center justify-center">
                  <DialogTitle className="flex font-semibold text-[20px] text-center items-center">
                    <button
                      className="absolute right-0"
                      onClick={() => setIsOpen(false)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="size-10"
                      >
                        <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
                      </svg>
                    </button>
                  </DialogTitle>
                </div>
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
                    Account has been created!
                  </p>
                  <p className=" text-[16px]  text-center">
                    You can access and manage this account details through the
                    <br />
                    &apos;Account Management&apos; section accessible from the
                    sidebar.
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

export default CreateAccountSuccess;
