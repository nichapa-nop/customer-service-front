import {
  Description,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  Transition,
} from "@headlessui/react";
import { motion } from "framer-motion";
import { init } from "next/dist/compiled/webpack/webpack";
import React, { Dispatch, SetStateAction } from "react";

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  initialTicket: TicketResponse;
  onClose?: () => void;
}

const TicketDetail: React.FC<Props> = ({
  isOpen,
  setIsOpen,
  onClose,
  initialTicket,
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

  return (
    <>
      <Dialog
        open={isOpen}
        onClose={() => (onClose ? onClose() : setIsOpen(false))}
        className="relative z-50"
      >
        <DialogBackdrop className="fixed inset-0 bg-black/30" />

        <div className="fixed inset-0 w-screen overflow-y-auto p-1 py-24">
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
                    Ticket Detail
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
                    Ticket ID : {initialTicket.ticketId}
                  </span>
                  <div
                    className={`flex justify-center items-center h-9 w-32 rounded-[15px] ${getStatusBackgroundColor(
                      initialTicket.status
                    )}`}
                  >
                    <span className="text-white">{initialTicket.status}</span>
                  </div>
                </div>

                <div className="bg-white p-6 h-[440px] rounded-xl shadow-sm capitalize">
                  <p className="font-semibold text-[20px] pl-6">
                    Customer Info
                  </p>
                  <div className="grid grid-cols-2 gap-2 p-3">
                    <div className="flex flex-col gap-4 p-4">
                      <p>First Name (EN)</p>
                      <span className="bg-gradient-to-tr from-deep-blue to-bright-red inline-block text-transparent bg-clip-text">
                        {initialTicket.cusFirstName}
                      </span>
                    </div>
                    <div className="flex flex-col gap-4 p-4">
                      <p>Last Name (EN)</p>
                      <span className="bg-gradient-to-tr from-deep-blue to-bright-red inline-block text-transparent bg-clip-text">
                        {initialTicket.cusLastName}
                      </span>
                    </div>
                    <div className="flex flex-col gap-4 p-4">
                      <p>Phone Number</p>
                      <span className="bg-gradient-to-tr from-deep-blue to-bright-red inline-block text-transparent bg-clip-text">
                        {initialTicket.cusPhoneNum}
                      </span>
                    </div>
                    <div className="flex flex-col gap-4 p-4">
                      <p>Type</p>
                      <span className="bg-gradient-to-tr from-deep-blue to-bright-red inline-block text-transparent bg-clip-text uppercase">
                        {initialTicket.cusCompanyType}
                      </span>
                    </div>
                    <div className=" flex flex-col gap-4 p-4">
                      <p>Email</p>
                      <span className="bg-gradient-to-tr from-deep-blue to-bright-red inline-block text-transparent bg-clip-text lowercase">
                        {initialTicket.cusEmail}
                      </span>
                    </div>
                    <div className=" flex flex-col gap-4 p-4">
                      <p>Company Name</p>
                      <span className="bg-gradient-to-tr from-deep-blue to-bright-red inline-block text-transparent bg-clip-text uppercase">
                        {initialTicket.cusCompanyName}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl h-[420px] capitalize">
                  <p className="font-semibold text-[20px] mb-2  pl-6">
                    System Info
                  </p>
                  <div className="grid grid-cols-2 gap-2  p-3">
                    <div className="flex flex-col gap-4 p-4">
                      <p>Platform</p>
                      <span className="bg-gradient-to-tr from-deep-blue to-bright-red inline-block text-transparent bg-clip-text uppercase">
                        {initialTicket.platform}
                      </span>
                    </div>
                    <div className="flex flex-col gap-4 p-4">
                      <p>Incident Type</p>
                      <span className="bg-gradient-to-tr from-deep-blue to-bright-red inline-block text-transparent bg-clip-text">
                        {initialTicket.incidentType}
                      </span>
                    </div>
                    <div className="flex flex-col gap-4 p-4">
                      <p>Business Impact</p>
                      <span className="bg-gradient-to-tr from-deep-blue to-bright-red inline-block text-transparent bg-clip-text">
                        {initialTicket.businessImpact}
                      </span>
                    </div>
                    <div className="flex flex-col gap-4 p-4">
                      <p>Feedback Channels</p>
                      <span className="bg-gradient-to-tr from-deep-blue to-bright-red inline-block text-transparent bg-clip-text">
                        {initialTicket.feedbackCh}
                      </span>
                    </div>
                    <div className="flex flex-col gap-4 p-4">
                      <p>Ticket Link</p>
                      <span className="bg-gradient-to-tr from-deep-blue to-bright-red inline-block text-transparent bg-clip-text">
                        {initialTicket.ticketLink
                          ? initialTicket.ticketLink
                          : "-"}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col p-6 rounded-xl h-[560px] shadow-sm bg-white capitalize">
                  <p className=" font-semibold text-[20px] pl-6">
                    General Info
                  </p>
                  <div className=" p-3">
                    <div className="flex flex-col gap-4 p-4">
                      <p>Topic</p>
                      <span className="bg-gradient-to-tr from-deep-blue to-bright-red inline-block text-transparent bg-clip-text">
                        {initialTicket.topic}
                      </span>
                    </div>
                    <div className="flex flex-col gap-4 p-4">
                      <p>Description</p>
                      {/* <textarea
                        className="bg-dark-gray w-full h-[240px] rounded-[15px] p-4 "
                        defaultValue={initialTicket.description}
                      ></textarea> */}
                      <span className="bg-gradient-to-tr from-deep-blue to-bright-red inline-block text-transparent bg-clip-text  h-[240px]">
                        {initialTicket.description}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-[20px] h-80 shadow-sm">
                  <p className=" font-semibold text-[20px] pl-6">CS Info</p>
                  <div className="grid grid-cols-2 gap-2  p-3">
                    <div className="flex flex-col gap-4 p-4">
                      <p>First Name (EN)</p>
                      <span className="bg-gradient-to-tr from-deep-blue to-bright-red inline-block text-transparent bg-clip-text">
                        {initialTicket.assignTo?.firstName}
                      </span>
                    </div>
                    <div className="flex flex-col gap-4 p-4">
                      <p>Last Name (EN)</p>
                      <span className="bg-gradient-to-tr from-deep-blue to-bright-red inline-block text-transparent bg-clip-text">
                        {initialTicket.assignTo?.lastName}
                      </span>
                    </div>
                    <div className="col-span-2 flex flex-col gap-4 p-4">
                      <p>Assign To</p>
                      <span className="bg-gradient-to-tr from-deep-blue to-bright-red inline-block text-transparent bg-clip-text  h-[240px]">
                        {initialTicket.assignTo?.email}
                      </span>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </motion.div>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default TicketDetail;
