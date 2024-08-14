"use client";
import {
  Description,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  Transition,
} from "@headlessui/react";
import { Dispatch, Fragment, SetStateAction, useState } from "react";

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  initialTicket: TicketResponse;
  onClose?: () => void;
}

const EditTicketModal: React.FC<Props> = ({
  isOpen,
  onClose,
  setIsOpen,
  initialTicket,
}) => {
  // let [isOpen, setIsOpen] = useState(false);
  console.log(initialTicket);
  return (
    <>
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
          className="relative z-50"
        >
          <DialogBackdrop className="fixed inset-0 bg-black/30" />

          <div className="fixed inset-0 w-screen overflow-y-auto p-1 py-24">
            <div className="flex min-h-full  items-center justify-center">
              <DialogPanel className="bg-light-gray2 w-[1000px] space-y-[50px] border rounded-[30px] p-12">
                <DialogTitle className="font-semibold text-center text-[20px]">
                  Edit Ticket
                </DialogTitle>
                {/* <Description>
                This will permanently deactivate your account
              </Description> */}
                <div className=" bg-white p-6 h-[90px] rounded-xl items-center justify-center shadow-sm">
                  <p className="font-semibold text-[20px] pl-6">
                    Ticket ID : {initialTicket.ticketId}
                  </p>
                </div>

                <div className="bg-white p-6 h-[440px] rounded-xl shadow-sm">
                  <p className="font-semibold text-[20px] pl-6">
                    Customer Info
                  </p>
                  <div className="grid grid-cols-2 gap-2 p-3">
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
                <div className="bg-white p-6 rounded-xl h-[420px]">
                  <p className="font-semibold text-[20px] mb-2  pl-6">
                    System Info
                  </p>
                  <div className="grid grid-cols-2 gap-2  p-3">
                    <div className="flex flex-col gap-2 p-4">
                      <p>Platform</p>
                      <input
                        className="bg-light-gray2 w-full h-10 rounded-[15px] pl-4 hover:placeholder:text-space-black"
                        placeholder="Nichapa"
                      ></input>
                    </div>
                    <div className="flex flex-col gap-2 p-4">
                      <p>Incident Type</p>
                      <input
                        className="bg-light-gray2 w-full h-10 rounded-[15px] pl-4 hover:placeholder:text-space-black"
                        placeholder="Nopparat "
                      ></input>
                    </div>
                    <div className="flex flex-col gap-2 p-4">
                      <p>Business Impact</p>
                      <input
                        className="bg-light-gray2 w-full h-10 rounded-[15px] pl-4 hover:placeholder:text-space-black"
                        placeholder="Nichapa"
                      ></input>
                    </div>
                    <div className="flex flex-col gap-2 p-4">
                      <p>Feedback Channels</p>
                      <input
                        className="bg-light-gray2 w-full h-10 rounded-[15px] pl-4 hover:placeholder:text-space-black"
                        placeholder="Nichapa"
                      ></input>
                    </div>
                    <div className="flex flex-col gap-2 p-4">
                      <p>Ticket Link</p>
                      <input
                        className="bg-light-gray2 w-full h-10 rounded-[15px] pl-4 hover:placeholder:text-space-black"
                        placeholder="Nichapa"
                      ></input>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col p-6 rounded-xl h-[560px] shadow-sm bg-white">
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
                      <input
                        className="bg-light-gray2 w-full h-[240px] rounded-[15px] pl-4 hover:placeholder:text-space-black"
                        placeholder="Text"
                      ></input>
                    </div>
                    <div className="flex mt-2 justify-end">
                      <button className=" bg-gradient-to-tr from-deep-blue via-fade-purple to-bright-red w-64 h-14 rounded-[30px] text-white">
                        + New Description
                      </button>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-[20px] h-80 shadow-sm">
                  <p className=" font-semibold text-[20px] pl-6">CS Info</p>
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
                    <div className="col-span-2 flex flex-col gap-2 p-4">
                      <p>Assign To</p>
                      <input
                        className="bg-light-gray2 w-full h-10 rounded-[15px] pl-4 hover:placeholder:text-space-black"
                        placeholder="ee@baseplayhouse.co"
                      ></input>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-[20px] h-60 shadow-sm">
                  <p className=" font-semibold text-[20px] pl-6 mb-6">
                    Ticket Setting
                  </p>

                  <div className=" flex justify-between py-4 px-7">
                    <div>
                      <img></img>
                      <p>Close/Re-open Ticket</p>
                    </div>
                    <button className=" bg-gradient-to-tr from-cancel-bl to-cancel-tr w-28 h-8 rounded-[15px] text-white">
                      Close
                    </button>
                  </div>
                  <div className=" flex justify-between py-4 px-7">
                    <div>
                      <img></img>
                      <p>Export</p>
                    </div>
                    <button className=" bg-gradient-to-tr from-deep-blue  to-bright-red w-28 h-8 rounded-[15px] text-white">
                      Export
                    </button>
                  </div>
                </div>
                <div className="flex gap-4 items-center justify-center ">
                  <button className=" bg-gradient-to-tr from-deep-blue to-bright-red w-64 h-14 rounded-[30px] text-white">
                    Save
                  </button>
                  <button onClick={() => setIsOpen(false)}>Cancel</button>
                </div>
              </DialogPanel>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default EditTicketModal;
