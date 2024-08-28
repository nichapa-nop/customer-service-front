"use client";
import {
  Description,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  Transition,
} from "@headlessui/react";
import { motion } from "framer-motion";
import React, { Dispatch, Fragment, SetStateAction, useState } from "react";
import DeleteTicketSuccessModal from "../delete-ticket-success/modal";
import { deleteTicket } from "@/actions/ticket.action";
import { Spinner } from "@nextui-org/react";

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  initialTicket: TicketResponse;
  onClose?: () => void;
}

const DeleteTicketModal: React.FC<Props> = ({
  isOpen,
  onClose,
  setIsOpen,
  initialTicket,
}) => {
  const [isDeleteTicketSuccessModalOpen, setIsDeleteTicketSuccessModalOpen] =
    useState(false);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  const openModal = () => {
    setIsDeleteTicketSuccessModalOpen(true);
    if (onClose) {
      onClose();
    } else {
      setIsOpen(false);
    }
  };

  // const [ticketId, setTicketId] = useState<string>("");
  // async function deleteTicket(keyword?: string) {
  //   const response
  // }

  async function handleDeleteTicket() {
    setIsDeleting(true);
    await deleteTicket({ ticketId: initialTicket.ticketId });
    setIsDeleteTicketSuccessModalOpen(true);
    setIsDeleting(false);
  }

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
              <DialogPanel className="bg-white w-[650px] h-[460px] border rounded-[20px] p-12 ">
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
                <div className="flex justify-center items-center mt-8 mb-5">
                  <img
                    src="/assets/images/warning.png"
                    className="h-[100px] w-[100px] "
                  ></img>
                </div>

                <div className="flex flex-col h-[120px] rounded-xl mb-6 items-center justify-center">
                  <p className="font-semibold text-[20px] mb-3 text-center">
                    Are you sure you want to delete Ticket #
                    {initialTicket.ticketId}?
                  </p>
                  <p className=" text-[16px] text-center">
                    Please confirm your intention to delete this ticket. This
                    action is <br />
                    irreversible and will permanently remove this ticket from
                    the system.
                  </p>
                </div>
                <div className="flex gap-4 items-center justify-center ">
                  <button
                    className=" bg-gradient-to-tr from-deep-blue to-bright-red w-64 h-14 rounded-[30px] text-white"
                    onClick={() => {
                      handleDeleteTicket();
                    }}
                  >
                    {isDeleting && <Spinner />}
                    {!isDeleting && "Delete"}
                  </button>
                </div>
              </DialogPanel>
            </motion.div>
          </div>
        </div>
      </Dialog>
      <DeleteTicketSuccessModal
        isOpen={isDeleteTicketSuccessModalOpen}
        setIsOpen={setIsDeleteTicketSuccessModalOpen}
        onClose={() => {
          setIsDeleteTicketSuccessModalOpen(false);
          setIsOpen(false);
        }}
      />
    </>
  );
};

export default DeleteTicketModal;
