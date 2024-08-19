"use client";
import CreateTicketSuccess from "@/app/(main)/(modal)/ticket/create-ticket-success/page";
import {
  Description,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  Transition,
} from "@headlessui/react";
import React, { Dispatch, Fragment, SetStateAction, useState } from "react";

// type Props = {
//   isOpen: boolean;
//   setIsOpen: Dispatch<SetStateAction<boolean>>;
// };

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  onClose?: () => void;
}
//const CreateTicket({ isOpen, setIsOpen }: Props) {

const CreateTicketModal: React.FC<Props> = ({ isOpen, onClose, setIsOpen }) => {
  // let [isOpen, setIsOpen] = useState(false);
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const openModal = () => setIsModalOpen(true);
  // const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {/* <button
        type="button"
        className=" bg-red-500 h-10 rounded-[20px]"
        onClick={() => setIsOpen(true)}
      >
        + New Ticket
      </button> */}
      <Transition appear show={isOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0" />
        </Transition.Child>
        <Dialog
          open={isOpen}
          onClose={() => (onClose ? onClose() : setIsOpen(false))}
          className="relative z-50 "
        >
          <DialogBackdrop className="fixed inset-0 bg-black/30" />
          <div className="fixed inset-0 w-screen overflow-y-auto p-1 py-24">
            <div className="flex min-h-full  items-center justify-center">
              <DialogPanel className="bg-light-gray2 w-[1000px] space-y-[50px] border rounded-[30px] p-12">
                <div className="relative flex items-center justify-center">
                  <DialogTitle className="flex font-semibold text-[20px] text-center items-center">
                    Create New Ticket
                    <button
                      className="absolute right-0  "
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
                  <p className="font-semibold text-[20px] pl-6">
                    Customer Info
                  </p>
                  <div className="grid grid-cols-2 gap-2  p-3">
                    <div className="flex flex-col gap-2 p-4">
                      <p>First Name (EN)</p>
                      <input
                        className="bg-light-gray2 w-full h-10 rounded-[15px] pl-4 hover:placeholder:text-space-black"
                        placeholder="Nichapa"
                      ></input>
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
                        placeholder="0123456789"
                      ></input>
                    </div>
                    <div className="flex flex-col gap-2 p-4">
                      <p>Type</p>
                      <input
                        className="bg-light-gray2 w-full h-10 rounded-[15px] pl-4 hover:placeholder:text-space-black"
                        placeholder="Select"
                      ></input>
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
                </div>
                <div className="bg-white p-6 rounded-xl h-[430px] shadow-light1">
                  <p className="font-semibold text-[20px] mb-2  pl-6">
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
                  <p className=" font-semibold text-[20px] pl-6">
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
                        className="bg-light-gray2 w-full h-[240px] rounded-[15px] p-4 hover:placeholder:text-space-black"
                        placeholder="Text"
                        // defaultValue={initialTicket.description}
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl h-80 shadow-light1">
                  <p className=" font-semibold text-[20px] pl-6">CS Info</p>
                  <div className="grid grid-cols-2 gap-2  p-3">
                    <div className="flex flex-col gap-2 p-4 hover:placeholder:text-space-black">
                      <p>First Name (EN)</p>
                      <input
                        className="bg-light-gray2 w-full h-10 rounded-[15px] pl-4 hover:placeholder:text-space-black"
                        placeholder="Nichapa"
                      ></input>
                    </div>
                    <div className="flex flex-col gap-2 p-4">
                      <p>Last Name (EN)</p>
                      <input
                        className="bg-light-gray2 w-full h-10 rounded-[15px] pl-4 hover:placeholder:text-space-black"
                        placeholder="Nopparat"
                      ></input>
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
                    // onClick={openModal}
                  >
                    Create Ticket
                  </button>
                  {/* <button onClick={() => setIsOpen(false)}>Cancel</button> */}
                </div>
                {/* <CreateTicketSuccess
                  isOpen={isModalOpen}
                  onclose={closeModal}
                /> */}
              </DialogPanel>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CreateTicketModal;
