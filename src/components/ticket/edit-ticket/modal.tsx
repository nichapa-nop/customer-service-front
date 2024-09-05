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
import { Dispatch, Fragment, SetStateAction, useState } from "react";
import { ticketSchema } from "@/schemas/ticket.schema";
import { z } from "zod";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { editTicket, reOpenTicket } from "@/actions/ticket.action";

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  initialTicket: TicketResponse;
  onClose?: () => void;
  setIsEditTicketSuccessModalOpen: Dispatch<SetStateAction<boolean>>;
  setIsCloseTicketModalOpen: Dispatch<SetStateAction<boolean>>;
  setFocusCloseTicketModal: Dispatch<
    SetStateAction<TicketResponse | undefined>
  >;
  setIsReOpenTicketModalOpen: Dispatch<SetStateAction<boolean>>;
}

type TicketSchema = z.infer<typeof ticketSchema>;

const EditTicketModal: React.FC<Props> = ({
  isOpen,
  onClose,
  setIsOpen,
  initialTicket,
  setIsEditTicketSuccessModalOpen,
  setIsCloseTicketModalOpen,
  setFocusCloseTicketModal,
  setIsReOpenTicketModalOpen,
}) => {
  // let [isOpen, setIsOpen] = useState(false);
  // console.log(initialTicket);

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
      const editTicketResponse = await editTicket(
        { ticketId: initialTicket.ticketId },
        data
      );

      if (editTicketResponse.success) {
        setIsOpen(false);
        setIsEditTicketSuccessModalOpen(true);

        // openModal(); // Open the success modal
      }
    } catch (error) {
      console.error("Error edit ticket:", error);
      alert("Failed to edit ticket. Please try again.");
    }
  };
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const { control, watch, handleSubmit } = useForm<TicketSchema>({
    mode: "onChange",
    resolver: zodResolver(ticketSchema),
    defaultValues: {
      cusFirstName: initialTicket.cusFirstName || "",
      cusLastName: initialTicket.cusLastName || "",
      cusPhoneNum: initialTicket.cusPhoneNum || "",
      cusEmail: initialTicket.cusEmail || "",
      cusCompanyName: initialTicket.cusCompanyName || "",
      cusCompanyType: initialTicket.cusCompanyType || "",
      topic: initialTicket.topic || "",
      description: initialTicket.description || "",
      platform: initialTicket.platform || "",
      incidentType: initialTicket.incidentType || "",
      businessImpact: initialTicket.businessImpact || "",
      assignTo: initialTicket.assignTo?.email || "",
      status: initialTicket.status || "",
      feedbackCh: initialTicket.feedbackCh || "",
      ticketLink: initialTicket.ticketLink || "",
    },
  });

  async function handleReOpenTicket() {
    const reOpenResponse = await reOpenTicket({
      ticketId: initialTicket.ticketId,
    });
    if (reOpenResponse.success) {
      setIsReOpenTicketModalOpen(true);
      // setIsOpen(false);
    }
  }

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

                <div className="bg-white p-6 h-[440px] rounded-xl shadow-sm">
                  <p className="font-semibold text-[20px] pl-6">
                    Customer Info
                  </p>
                  <div className="grid grid-cols-2 gap-2 p-3">
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
                              className="bg-light-gray2 w-full h-10 rounded-[15px] pl-4 "
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
                      <Controller
                        control={control}
                        name="cusLastName"
                        render={({
                          field: { value, name, onChange, onBlur },
                        }) => {
                          return (
                            <input
                              id="lastName"
                              type="text"
                              className="bg-light-gray2 w-full h-10 rounded-[15px] pl-4 hover:placeholder:text-space-black"
                              placeholder="Nopparat"
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
                      <p>Phone Number</p>
                      <Controller
                        control={control}
                        name="cusPhoneNum"
                        render={({
                          field: { value, name, onChange, onBlur },
                        }) => {
                          return (
                            <input
                              id="PhoneNum"
                              type="text"
                              className="bg-light-gray2 w-full h-10 rounded-[15px] pl-4 hover:placeholder:text-space-black"
                              placeholder="012 345 6789"
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
                      <p>Type</p>
                      <Controller
                        control={control}
                        name="cusCompanyType" // Assuming 'cusCompanyType' is the correct field name in your schema
                        render={({
                          field: { onChange, onBlur, value, name },
                        }) => (
                          <select
                            id="Type"
                            name={name}
                            value={value}
                            onChange={onChange}
                            onBlur={onBlur}
                            className="bg-light-gray2 w-full h-10 rounded-[15px] pl-4 hover:placeholder:text-space-black"
                          >
                            <option value="" disabled>
                              Select
                            </option>
                            <option value="cdd">CDD</option>
                            <option value="hr">HR</option>
                            <option value="other">OTHER</option>
                          </select>
                        )}
                      />
                    </div>
                    <div className=" flex flex-col gap-2 p-4">
                      <p>Email</p>
                      <Controller
                        control={control}
                        name="cusEmail"
                        render={({
                          field: { value, name, onChange, onBlur },
                        }) => {
                          return (
                            <input
                              id="email"
                              type="text"
                              value={value}
                              name={name}
                              onChange={onChange}
                              onBlur={onBlur}
                              className="bg-light-gray2 w-full h-10 rounded-[15px] pl-4 hover:placeholder:text-space-black"
                              placeholder="ee@baseplayhouse.co"
                            ></input>
                          );
                        }}
                      />
                    </div>
                    <div className=" flex flex-col gap-2 p-4">
                      <p>Company Name</p>
                      <Controller
                        control={control}
                        name="cusCompanyName"
                        render={({
                          field: { value, name, onChange, onBlur },
                        }) => {
                          return (
                            <input
                              id="CompanyName"
                              type="text"
                              value={value}
                              name={name}
                              onChange={onChange}
                              onBlur={onBlur}
                              className="bg-light-gray2 w-full h-10 rounded-[15px] pl-4 hover:placeholder:text-space-black"
                              placeholder="BASE PLAYHOUSE CO. TLD."
                            ></input>
                          );
                        }}
                      />
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
                      <Controller
                        control={control}
                        name="platform"
                        render={({
                          field: { value, name, onChange, onBlur },
                        }) => {
                          return (
                            <select
                              id="platform"
                              name={name}
                              value={value}
                              onChange={onChange}
                              onBlur={onBlur}
                              className="bg-light-gray2 w-full h-10 rounded-[15px] pl-4 hover:placeholder:text-space-black"
                            >
                              <option value="" disabled>
                                Select
                              </option>
                              <option value="cdd">CDD</option>
                              <option value="hr">HR</option>
                            </select>
                          );
                        }}
                      />
                    </div>
                    <div className="flex flex-col gap-2 p-4">
                      <p>Incident Type</p>
                      <Controller
                        control={control}
                        name="incidentType"
                        render={({
                          field: { value, name, onChange, onBlur },
                        }) => {
                          return (
                            <select
                              value={value}
                              name={name}
                              onChange={onChange}
                              onBlur={onBlur}
                              className="bg-light-gray2 w-full h-10 rounded-[15px] pl-4 hover:placeholder:text-space-black"
                            >
                              <option value="" disabled>
                                Select
                              </option>
                              <option value="issue">Issue</option>
                              <option value="consult">Consult</option>
                              <option value="other">Other</option>
                            </select>
                          );
                        }}
                      />
                    </div>
                    <div className="flex flex-col gap-2 p-4">
                      <p>Business Impact</p>
                      <Controller
                        control={control}
                        name="businessImpact"
                        render={({
                          field: { value, name, onChange, onBlur },
                        }) => {
                          return (
                            <select
                              value={value}
                              name={name}
                              onChange={onChange}
                              onBlur={onBlur}
                              className="bg-light-gray2 w-full h-10 rounded-[15px] pl-4 hover:placeholder:text-space-black"
                            >
                              <option value="" disabled>
                                Select
                              </option>
                              <option value="s1">S1</option>
                              <option value="s2">S2</option>
                              <option value="s3">S3</option>
                              <option value="s4">S4</option>
                              <option value="no">No</option>
                            </select>
                          );
                        }}
                      />
                    </div>
                    <div className="flex flex-col gap-2 p-4">
                      <p>Feedback Channels</p>
                      <Controller
                        control={control}
                        name="feedbackCh"
                        render={({
                          field: { value, name, onChange, onBlur },
                        }) => {
                          return (
                            <select
                              value={value}
                              name={name}
                              onChange={onChange}
                              onBlur={onBlur}
                              className="bg-light-gray2 w-full h-10 rounded-[15px] pl-4 hover:placeholder:text-space-black"
                            >
                              <option value="" disabled>
                                Select
                              </option>
                              <option value="help_crunch">help crunch</option>
                              <option value="phone">Phone</option>
                              <option value="email">Email</option>
                              <option value="line">Line</option>
                              <option value="ticket">Ticket</option>
                              <option value="base_employee">
                                BASE employee
                              </option>
                            </select>
                          );
                        }}
                      />
                    </div>
                    <div className="flex flex-col gap-2 p-4">
                      <p>Ticket Link</p>
                      <Controller
                        control={control}
                        name="ticketLink"
                        render={({
                          field: { value, name, onChange, onBlur },
                        }) => {
                          return (
                            <select
                              value={value}
                              name={name}
                              onChange={onChange}
                              onBlur={onBlur}
                              className="bg-light-gray2 w-full h-10 rounded-[15px] pl-4 hover:placeholder:text-space-black"
                            >
                              <option value="" disabled>
                                Select
                              </option>
                              <option value="help_crunch">help crunch</option>
                              <option value="phone">Phone</option>
                              <option value="email">Email</option>
                              <option value="line">Line</option>
                              <option value="ticket">Ticket</option>
                              <option value="base_employee">
                                BASE employee
                              </option>
                            </select>
                          );
                        }}
                      />
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
                      <Controller
                        control={control}
                        name="topic"
                        render={({
                          field: { value, name, onChange, onBlur },
                        }) => {
                          return (
                            <input
                              id="topic"
                              type="text"
                              value={value}
                              name={name}
                              onChange={onChange}
                              onBlur={onBlur}
                              className="bg-light-gray2 w-full h-10 rounded-[15px] pl-4 hover:placeholder:text-space-black"
                              placeholder="Text"
                            ></input>
                          );
                        }}
                      />
                    </div>
                    <div className="flex flex-col gap-2 p-4">
                      <p>Description</p>
                      <Controller
                        control={control}
                        name="description"
                        render={({
                          field: { value, name, onChange, onBlur },
                        }) => {
                          return (
                            <textarea
                              id="description"
                              value={value}
                              name={name}
                              onChange={onChange}
                              onBlur={onBlur}
                              className="bg-light-gray2 resize-none w-full h-[240px] rounded-[15px] p-4 hover:placeholder:text-space-black"
                              placeholder="Text"
                            ></textarea>
                          );
                        }}
                      />
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
                      <p className="w-full h-10 rounded-[15px] pl-4">Nichapa</p>
                    </div>
                    <div className="flex flex-col gap-2 p-4">
                      <p>Last Name (EN)</p>
                      <p className="w-full h-10 rounded-[15px] pl-4">
                        Nopparat
                      </p>
                    </div>
                    <div className="col-span-2 flex flex-col gap-2 p-4">
                      <p>Assign To</p>
                      <Controller
                        control={control}
                        name="assignTo"
                        render={({
                          field: { value, name, onChange, onBlur },
                        }) => {
                          return (
                            <input
                              id="assignTo"
                              type="email"
                              value={value}
                              name={name}
                              onChange={onChange}
                              onBlur={onBlur}
                              placeholder="ee@baseplayhouse.co"
                              className="bg-light-gray2 w-full h-10 rounded-[15px] pl-4 hover:placeholder:text-space-black"
                            ></input>
                          );
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-[20px] h-60 shadow-sm">
                  <p className=" font-semibold text-[20px] pl-6 mb-6">
                    Ticket Setting
                  </p>

                  <div className=" flex justify-between py-4 px-7">
                    <div className="flex flex-row items-center space-x-5">
                      <div className="bg-gradient-to-tr from-deep-blue to-bright-red h-8 w-8 rounded-full items-center justify-center flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="white"
                          className="size-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                          />
                        </svg>
                      </div>
                      <p>Close/Re-open Ticket</p>
                    </div>
                    {initialTicket.status !== "closed" && (
                      <button
                        className=" bg-gradient-to-tr from-cancel-bl to-cancel-tr w-28 h-8 rounded-[15px] text-white"
                        onClick={() => {
                          setIsCloseTicketModalOpen(true);
                          setIsOpen(false);
                          setFocusCloseTicketModal(initialTicket);
                        }}
                      >
                        Close
                      </button>
                    )}
                    {initialTicket.status == "closed" && (
                      <button
                        className=" bg-gradient-to-tr from-cancel-bl to-cancel-tr w-28 h-8 rounded-[15px] text-white"
                        onClick={() => {
                          handleReOpenTicket();
                        }}
                      >
                        Re-open
                      </button>
                    )}
                  </div>
                  <div className=" flex justify-between py-4 px-7">
                    <div className="flex flex-row items-center space-x-5">
                      <div className="bg-gradient-to-tr from-deep-blue to-bright-red h-8 w-8 rounded-full items-center justify-center flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="white"
                          className="size-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15"
                          />
                        </svg>
                      </div>
                      <p>Export</p>
                    </div>
                    <button className=" bg-gradient-to-tr from-deep-blue  to-bright-red w-28 h-8 rounded-[15px] text-white">
                      Export
                    </button>
                  </div>
                </div>
                <div className="flex gap-4 items-center justify-center ">
                  <button
                    className=" bg-gradient-to-tr from-deep-blue to-bright-red w-64 h-14 rounded-[30px] text-white"
                    type="submit"
                  >
                    Save
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

export default EditTicketModal;
