import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { motion } from "framer-motion";
import React, { Dispatch, SetStateAction, useState } from "react";
import CloseTicketSuccessModal from "../close-ticket-success/modal";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { ticketSchema } from "@/schemas/ticket.schema";
import { z } from "zod";
import { closeTicket } from "@/actions/ticket.action";
import { zodResolver } from "@hookform/resolvers/zod";

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  onClose?: () => void;
  ticket: TicketResponse;
  setIsCloseTicketSuccess: Dispatch<SetStateAction<boolean>>;
  setTargetCloseTicket: Dispatch<SetStateAction<TicketResponse | undefined>>;
  // initialticket: TicketResponse[];
}

type TicketSchema = z.infer<typeof ticketSchema>;

const CloseTicketModal: React.FC<Props> = ({
  isOpen,
  onClose,
  setIsOpen,
  ticket,
  setIsCloseTicketSuccess,
  setTargetCloseTicket,
  // initialticket,
}) => {
  const getStatusBackgroundColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "in progress":
        return "bg-gradient-to-tr relative from-waiting-bl to-waiting-tr";
      case "open":
        return "bg-gradient-to-tr relative from-approve-bl to-approve-tr";
      case "closed":
        return "bg-gradient-to-tr relative from-cancel-bl to-cancel-tr";
      case "deleted":
        return "bg-dark-gray";
      default:
        return "";
    }
  };

  const processForm: SubmitHandler<TicketSchema> = async (data) => {
    try {
      const closeTicketResponse = await closeTicket(
        { ticketId: ticket.ticketId },
        data
      );
      if (closeTicketResponse.success) {
        setIsCloseTicketSuccess(true);
        setTargetCloseTicket(ticket);
        setIsOpen(false); // setIsCloseTicketSuccessModalOpen(true);
      }
    } catch (error) {
      console.error("Error Close ticket:", error);
      alert("Failed to close ticket. Please try again.");
    }
  };
  const { control, watch, handleSubmit } = useForm<TicketSchema>({
    mode: "onChange",
    resolver: zodResolver(ticketSchema),
    defaultValues: {
      solution: "",
      email: "",
    },
  });

  // async function handleCloseTicket() {
  //   // Call API Here;

  //   // Ater that;
  //   setIsCloseTicketSuccess(true);
  //   setTargetCloseTicket(ticket);
  //   setIsOpen(false);
  // }

  return (
    <>
      <Dialog
        open={isOpen}
        onClose={() => (onClose ? onClose() : setIsOpen(false))}
        className="relative z-50"
      >
        <DialogBackdrop className="fixed inset-0 bg-black/30" />

        <form
          onSubmit={handleSubmit(processForm)}
          className="fixed inset-0 w-screen overflow-y-auto p-1 py-24"
        >
          <div className="flex min-h-full items-center justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <DialogPanel className="bg-light-gray2 w-[920px] space-y-[50px] border rounded-[30px] p-12 ">
                <div className="relative flex items-center justify-center">
                  <DialogTitle className="flex font-semibold text-[20px] text-center items-center">
                    Edit Ticket
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

                <div className="flex bg-white px-6 h-[90px] rounded-xl items-center justify-between shadow-sm">
                  <span className="font-semibold text-[20px] pl-6">
                    Ticket ID : {ticket.ticketId}
                  </span>
                  <div
                    className={`flex justify-center items-center h-9 w-32 rounded-[15px] ${getStatusBackgroundColor(
                      ticket.status
                    )}`}
                  >
                    <span className="text-white">{ticket.status}</span>
                  </div>
                </div>
                <div className=" bg-white shadow-sm p-6 h-[630px] rounded-xl">
                  <p className="font-semibold text-[20px] pl-6">
                    Customer Info
                  </p>
                  <div className=" p-3">
                    <div className="flex flex-col gap-2 p-4">
                      <p className="font-medium">Solution</p>
                      {/* <input
                        className=" bg-light-gray2 w-full h-[250px] rounded-[15px] pl-4 hover:placeholder:text-space-black "
                        placeholder="Solution"
                      ></input> */}
                      <Controller
                        control={control}
                        name="solution"
                        render={({
                          field: { value, name, onChange, onBlur },
                        }) => {
                          return (
                            <textarea
                              id="solution"
                              value={value}
                              name={name}
                              onChange={onChange}
                              onBlur={onBlur}
                              className="bg-light-gray2 resize-none w-full h-[250px] rounded-[15px] p-4 hover:placeholder:text-space-black"
                              placeholder="Text"
                            ></textarea>
                          );
                        }}
                      />
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
                    type="submit"
                    // onClick={() => {
                    //   handleCloseTicket();
                    // }}
                  >
                    Confirm
                  </button>
                </div>
              </DialogPanel>
            </motion.div>
          </div>
        </form>
      </Dialog>
    </>
  );
};

export default CloseTicketModal;
