import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { motion } from "framer-motion";
import React, { Dispatch, SetStateAction, useState } from "react";
import CloseTicketSuccessModal from "../close-ticket-success/modal";

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  onClose?: () => void;
  // initialticket: TicketResponse[];
}

const CloseTicketModal: React.FC<Props> = ({
  isOpen,
  onClose,
  setIsOpen,
  // initialticket,
}) => {
  const [isCloseTicketSuccessModalOpen, setIsCloseTicketSuccessModalOpen] =
    useState(false);

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
              <DialogPanel className=" bg-white w-[920px] h-[920px] space-y-[50px] border rounded-xl p-12 ">
                <DialogTitle className="font-semibold text-center text-[20px]">
                  Close Ticket
                </DialogTitle>
                {/* <Description>
                This will permanently deactivate your account
              </Description> */}

                <div className=" bg-white shadow-md shadow-light-gray1 p-6 h-[630px] rounded-xl">
                  <p className="font-semibold text-[20px] pl-6">
                    Customer Info
                  </p>
                  <div className=" p-3">
                    <div className="flex flex-col gap-2 p-4">
                      <p className="font-medium">Solution</p>
                      <input
                        className=" bg-light-gray2 w-full h-[250px] rounded-[15px] pl-4 hover:placeholder:text-space-black "
                        placeholder="Solution"
                      ></input>
                    </div>
                    <div className="flex flex-col gap-2 p-4">
                      <p className="font-medium">Inform the customer</p>
                      <div className="  w-full h-[150px] rounded-[15px] hover:placeholder:text-space-black">
                        <div className="flex items-center mt-1 space-x-3">
                          <input
                            type="checkbox"
                            className="appearance-none rounded-md cursor-pointer checked:bg-gradient-to-tr from-deep-blue to-bright-red w-[27px] h-[27px] border-light-gray1 border-[2px] relative
                          checked:after:content-[''] checked:after:absolute checked:after:left-[8px] checked:after:top-[3px] checked:after:w-[7px] checked:after:h-[14px] checked:after:border-white checked:after:border-r-[2px] checked:after:border-b-[2px] checked:after:rotate-45"
                          ></input>
                          <span>Send email to Inform the customer</span>
                        </div>
                        <div className=" flex flex-col gap-2 p-4 pl-10">
                          <p className="font-medium">Customer Email</p>
                          <input
                            className=" bg-light-gray2 w-full h-10 rounded-[15px] pl-4 hover:placeholder:text-space-black"
                            placeholder="example.ee@baseplayhouse.co"
                          ></input>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 items-center justify-center ">
                  <button
                    className=" bg-gradient-to-tr from-deep-blue to-bright-red w-64 h-14 rounded-[30px] text-white"
                    onClick={() => {
                      setIsCloseTicketSuccessModalOpen(true);
                    }}
                  >
                    Confirm
                  </button>
                  {isCloseTicketSuccessModalOpen && (
                    <CloseTicketSuccessModal
                      isOpen={isCloseTicketSuccessModalOpen}
                      setIsOpen={setIsCloseTicketSuccessModalOpen}
                      // onClose={() => setIsEditTicketSuccessModalOpen(false)}
                    />
                  )}
                </div>
              </DialogPanel>
            </motion.div>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default CloseTicketModal;
