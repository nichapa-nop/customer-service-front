"use client";
import {
  Description,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  Select,
  Transition,
} from "@headlessui/react";
import { motion } from "framer-motion";
import React, { Dispatch, Fragment, SetStateAction, useState } from "react";
import CreateTicketSuccess from "../create-ticket-success/modal";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { ticketSchema } from "@/schemas/ticket.schema";
import { zodResolver } from "@hookform/resolvers/zod";

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  onClose?: () => void;
  // initialTicket: TicketResponse;
}

type TicketSchema = z.infer<typeof ticketSchema>;

const processForm: SubmitHandler<TicketSchema> = async (data) => {
  console.log(data);
};

const CreateTicketModal: React.FC<Props> = ({
  isOpen,
  onClose,
  setIsOpen,
  // initialTicket,
}) => {
  const [isCreateTicketSuccessModalOpen, setIsCreateTicketSuccessModalOpen] =
    useState(false);
  const [isCustomerInfoOpen, setIsCustomerInfoOpen] = useState(true);

  const openModal = () => {
    setIsCreateTicketSuccessModalOpen(true);
    if (onClose) {
      onClose();
    } else {
      setIsOpen(false);
    }
  };

  // const [firstName, setFirstName] = useState<string>("");
  // const [lastName, setLastName] = useState<string>("");
  // const [phoneNum, setPhoneNum]

  const { control, watch, handleSubmit } = useForm<TicketSchema>({
    mode: "onChange",
    resolver: zodResolver(ticketSchema),
    defaultValues: {
      cusFirstName: "",
      cusLastName: "",
    },
  });

  console.log(watch());

  return (
    <>
      <Dialog
        open={isOpen}
        onClose={() => (onClose ? onClose() : setIsOpen(false))}
        className="relative z-50 "
      >
        <DialogBackdrop className="fixed inset-0 bg-black/30" />
        <form
          onSubmit={handleSubmit(processForm)}
          className="fixed inset-0 w-screen overflow-y-auto p-1 py-24"
        >
          <div className="flex min-h-full  items-center justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <DialogPanel className="bg-light-gray2 w-[1000px] space-y-[50px] border rounded-[30px] p-12">
                <div className="relative flex items-center justify-center">
                  <DialogTitle className="flex font-semibold text-[20px] text-center items-center">
                    Create New Ticket
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
                  {/* This will permanently deactivate your account */}
                {/* </Description> */}

                <div className="bg-white p-6 h-[460px] rounded-xl shadow-light1">
                  <div className="flex justify-between px-6 pt-2 pb-2">
                    <p className="font-semibold text-[20px]">Customer Info</p>
                    {/* <button onClick={() => setIsCustomerInfoOpen(false)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="size-10  "
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button> */}
                  </div>
                  {/* {isCustomerInfoOpen && ( */}
                  <div className="grid grid-cols-2 gap-2  p-3">
                    <div className="flex flex-col gap-2 p-4">
                      <p>First Name (EN)</p>
                      <Controller
                        control={control}
                        name="cusFirstName"
                        render={({
                          field: { value, name, onChange, onBlur },
                        }) => {
                          return (
                            <input
                              id="firstName"
                              type="text"
                              className="bg-light-gray2 w-full h-10 rounded-[15px] pl-4 hover:placeholder:text-space-black"
                              placeholder="Nichapa"
                              value={value}
                              name={name}
                              onChange={onChange}
                              onBlur={onBlur}
                            ></input>
                          );
                        }}
                      />
                    </div>
                    <div className="flex flex-col gap-2 p-4">
                      <p>Last Name (EN)</p>
                      <input
                        className="bg-light-gray2 w-full h-10 rounded-[15px] pl-4 hover:placeholder:text-space-black"
                        placeholder="Nopparat"
                      ></input>
                    </div>
                    <div className="flex flex-col gap-2 p-4">
                      <p>Phone Number</p>
                      <input
                        className="bg-light-gray2 w-full h-10 rounded-[15px] pl-4 hover:placeholder:text-space-black"
                        placeholder="012 345 6789"
                      ></input>
                    </div>
                    <div className="flex flex-col gap-2 p-4">
                      <p>Type</p>
                      {/* <input
                        className="bg-light-gray2 w-full h-10 rounded-[15px] pl-4 hover:placeholder:text-space-black"
                        placeholder="Select"
                      ></input> */}
                      <Select
                        name="Type"
                        className="bg-light-gray2 w-full h-10 rounded-[15px] pl-4 hover:placeholder:text-space-black"
                      >
                        <option disabled selected>
                          Select
                        </option>
                        <option>CDD</option>
                        <option>HR</option>
                        <option>OTHER</option>
                      </Select>
                    </div>
                    <div className=" flex flex-col gap-2 p-4">
                      <p>Email</p>
                      <input
                        className="bg-light-gray2 w-full h-10 rounded-[15px] pl-4 hover:placeholder:text-space-black"
                        placeholder="ee@baseplayhouse.co"
                      ></input>
                    </div>
                    <div className=" flex flex-col gap-2 p-4">
                      <p>Company Name</p>
                      <input
                        className="bg-light-gray2 w-full h-10 rounded-[15px] pl-4 hover:placeholder:text-space-black"
                        placeholder="BASE PLAYHOUSE CO. TLD."
                      ></input>
                    </div>
                  </div>
                  {/* )} */}
                </div>
                <div className="bg-white p-6 rounded-xl h-[430px] shadow-light1">
                  <p className="font-semibold text-[20px] mb-2  pl-6  pt-2">
                    System Info
                  </p>
                  <div className="grid grid-cols-2 gap-2  p-3">
                    <div className="flex flex-col gap-2 p-4">
                      <p>Platform</p>
                      <input
                        className="bg-light-gray2 w-full h-10 rounded-[15px] pl-4 hover:placeholder:text-space-black"
                        placeholder="Select"
                      ></input>
                    </div>
                    <div className="flex flex-col gap-2 p-4">
                      <p>Incident Type</p>
                      <input
                        className="bg-light-gray2 w-full h-10 rounded-[15px] pl-4 hover:placeholder:text-space-black"
                        placeholder="Select"
                      ></input>
                    </div>
                    <div className="flex flex-col gap-2 p-4">
                      <p>Business Impact</p>
                      <input
                        className="bg-light-gray2 w-full h-10 rounded-[15px] pl-4 hover:placeholder:text-space-black"
                        placeholder="Select"
                      ></input>
                    </div>
                    <div className="flex flex-col gap-2 p-4">
                      <p>Feedback Channels</p>
                      <input
                        className="bg-light-gray2 w-full h-10 rounded-[15px] pl-4 hover:placeholder:text-space-black"
                        placeholder="Select"
                      ></input>
                    </div>
                    <div className="flex flex-col gap-2 p-4">
                      <p>Ticket Link</p>
                      <input
                        className="bg-light-gray2 w-full h-10 rounded-[15px] pl-4 hover:placeholder:text-space-black"
                        placeholder="Select"
                      ></input>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col bg-white p-6 rounded-[15px] h-[510px] shadow-light1">
                  <p className=" font-semibold text-[20px] pl-6 pt-2">
                    General Info
                  </p>
                  <div className=" p-3">
                    <div className="flex flex-col gap-2 p-4">
                      <p>Topic</p>
                      <input
                        className="bg-light-gray2 w-full h-10 rounded-[15px] pl-4 hover:placeholder:text-space-black"
                        placeholder="Text"
                      ></input>
                    </div>
                    <div className="flex flex-col gap-2 p-4">
                      <p>Description</p>
                      <textarea
                        className="bg-light-gray2 resize-none w-full h-[240px] rounded-[15px] p-4 hover:placeholder:text-space-black"
                        placeholder="Text"
                        // defaultValue={initialTicket.description}
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl h-80 shadow-light1">
                  <p className=" font-semibold text-[20px] pl-6 pt-2">
                    CS Info
                  </p>
                  <div className="grid grid-cols-2 gap-2  p-3">
                    <div className="flex flex-col gap-2 p-4 hover:placeholder:text-space-black">
                      <p>First Name (EN)</p>
                      <p className="bg-light-gray2 w-full h-10 rounded-[15px] pl-4">
                        Nichapa
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 p-4">
                      <p>Last Name (EN)</p>
                      <p className="bg-light-gray2 w-full h-10 rounded-[15px] pl-4">
                        Nopparat
                      </p>
                    </div>
                    <div className="col-span-2 flex flex-col gap-2 p-4">
                      <p>Assign To</p>
                      <input
                        className="bg-light-gray2 w-full h-10 rounded-[15px] pl-4 hover:placeholder:text-space-black"
                        placeholder="ee@baseplayhouse.co"
                      ></input>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 items-center justify-center ">
                  <button
                    className=" bg-gradient-to-tr from-deep-blue to-bright-red w-64 h-14 rounded-[30px] text-white"
                    type="submit"
                  >
                    Create Ticket
                  </button>
                  {/* <button onClick={() => setIsOpen(false)}>Cancel</button> */}
                </div>
                {/* {isCreateTicketSuccessModalOpen && (
                  <CreateTicketSuccess
                    // initialTicket={ticketManagement.ticketId}
                    isOpen={isCreateTicketSuccessModalOpen}
                    setIsOpen={setIsCreateTicketSuccessModalOpen}
                    onClose={() => setIsCreateTicketSuccessModalOpen(false)}
                  />
                )} */}
              </DialogPanel>
            </motion.div>
          </div>
        </form>
      </Dialog>

      <CreateTicketSuccess
        // initialTicket={i}
        isOpen={isCreateTicketSuccessModalOpen}
        setIsOpen={setIsCreateTicketSuccessModalOpen}
        onClose={() => setIsCreateTicketSuccessModalOpen(false)}
      />
    </>
  );
};

export default CreateTicketModal;
