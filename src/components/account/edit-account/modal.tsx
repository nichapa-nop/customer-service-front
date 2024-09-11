"use client";
import React, { Dispatch, Fragment, SetStateAction } from "react";
import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  Transition,
} from "@headlessui/react";
import { motion } from "framer-motion";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { editAccount } from "@/actions/account.action";
import { zodResolver } from "@hookform/resolvers/zod";
import { accountSchema } from "@/schemas/account.schema";
import { z } from "zod";
// import successpic from "../../../../img/success.png";

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  onClose?: () => void;
  initialAccount: AccountResponse;
}

type AccountSchema = z.infer<typeof accountSchema>;

const EditAccountModal: React.FC<Props> = ({
  isOpen,
  setIsOpen,
  onClose,
  initialAccount,
}) => {
  const getStatusBackgroundColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "not_verify":
        return "bg-gradient-to-tr relative from-waiting-bl to-waiting-tr";
      case "verified":
        return "bg-gradient-to-tr relative from-approve-bl to-approve-tr";
      case "disabled":
        return "bg-gradient-to-tr relative from-cancel-bl to-cancel-tr";
      case "deleted":
        return "bg-dark-gray";
      default:
        return "";
    }
  };

  const processForm: SubmitHandler<AccountSchema> = async (data) => {
    try {
      const editAccountResponse = await editAccount(
        { uuid: initialAccount.uuid },
        data
      );
      if (editAccountResponse.success) {
        setIsOpen(false);
        // setIsEditAccountSuccessModalOpen(true);

        // openModal(); // Open the success modal
      }
    } catch (error) {
      alert("Failed to edit ticket. Please try again.");
    }
  };

  const { control, watch, handleSubmit } = useForm<AccountSchema>({
    mode: "onChange",
    resolver: zodResolver(accountSchema),
    defaultValues: {
      firstName: initialAccount.firstName || "",
      lastName: initialAccount.lastName || "",
      firstNameTh: initialAccount.firstNameTh || "",
      lastNameTh: initialAccount.lastNameTh || "",
      email: initialAccount.email || "",
      phoneNum: initialAccount.phoneNum || "",
      status: initialAccount.status || "",
    },
  });

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
                    Account Detail
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
                <div className="flex bg-white px-6 h-[90px] rounded-xl items-center justify-between shadow-sm">
                  <span className="font-semibold text-[20px] pl-6">
                    Account Status
                  </span>
                  <div
                    className={`flex justify-center items-center h-9 w-32 rounded-[15px] ${getStatusBackgroundColor(
                      initialAccount.status
                    )}`}
                  >
                    <span className="text-white">{initialAccount.status}</span>
                  </div>
                </div>
                <div className="bg-white p-6 flex flex-col rounded-xl shadow-sm">
                  <p className="font-semibold text-[20px] pl-6 py-3">
                    Account Information
                  </p>
                  <div className="grid grid-cols-2 gap-x-9 gap-y-6 p-6">
                    <div className="flex flex-col gap-2 ">
                      <p className=" font-medium text-[14px]">
                        First Name (EN)
                      </p>
                      <Controller
                        control={control}
                        name="firstName"
                        render={({
                          field: { value, name, onChange, onBlur },
                        }) => {
                          return (
                            <input
                              id="firstName"
                              type="text"
                              className="bg-light-gray2 placeholder:text-dark-gray w-full h-10 rounded-[15px] pl-4"
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
                    <div className="flex flex-col gap-2 ">
                      <p className=" font-medium text-[14px]">Last Name (EN)</p>
                      <Controller
                        control={control}
                        name="lastName"
                        render={({
                          field: { value, name, onChange, onBlur },
                        }) => {
                          return (
                            <input
                              id="lastName"
                              type="text"
                              value={value}
                              name={name}
                              onChange={onChange}
                              onBlur={onBlur}
                              className="bg-light-gray2 placeholder:text-dark-gray w-full h-10 rounded-[15px] pl-4"
                              placeholder="Nopparat"
                            ></input>
                          );
                        }}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className=" font-medium text-[14px]">
                        First Name (TH)
                      </p>
                      <Controller
                        control={control}
                        name="firstNameTh"
                        render={({
                          field: { value, name, onChange, onBlur },
                        }) => {
                          return (
                            <input
                              id="firstNameTh"
                              type="text"
                              value={value}
                              name={name}
                              onChange={onChange}
                              onBlur={onBlur}
                              className="bg-light-gray2 placeholder:text-dark-gray w-full h-10 rounded-[15px] pl-4"
                              placeholder="สมชาย"
                            ></input>
                          );
                        }}
                      />
                    </div>
                    <div className="flex flex-col gap-2 ">
                      <p className=" font-medium text-[14px]">Last Name (TH)</p>
                      <Controller
                        control={control}
                        name="lastNameTh"
                        render={({
                          field: { value, name, onChange, onBlur },
                        }) => {
                          return (
                            <input
                              id="lastNameTh"
                              type="text"
                              value={value}
                              name={name}
                              onChange={onChange}
                              onBlur={onBlur}
                              className="bg-light-gray2 placeholder:text-dark-gray w-full h-10 rounded-[15px] pl-4"
                              placeholder="ใจดี"
                            ></input>
                          );
                        }}
                      />
                    </div>
                    <div className="flex flex-col gap-2 ">
                      <p className=" font-medium text-[14px]">Phone Number</p>
                      <Controller
                        control={control}
                        name="phoneNum"
                        render={({
                          field: { value, name, onChange, onBlur },
                        }) => {
                          return (
                            <input
                              id="phoneNum"
                              type="text"
                              value={value}
                              name={name}
                              onChange={onChange}
                              onBlur={onBlur}
                              className="bg-light-gray2 placeholder:text-dark-gray w-full h-10 rounded-[15px] pl-4"
                              placeholder="0123456789"
                            ></input>
                          );
                        }}
                      />
                    </div>

                    <div className=" flex flex-col gap-2 ">
                      <p className=" font-medium text-[14px]">Email</p>
                      <Controller
                        control={control}
                        name="email"
                        render={({
                          field: { onChange, onBlur, value, name },
                        }) => {
                          return (
                            <input
                              id="email"
                              name={name}
                              value={value}
                              onChange={onChange}
                              onBlur={onBlur}
                              className="bg-light-gray2 placeholder:text-dark-gray w-full h-10 rounded-[15px] pl-4"
                              placeholder="ee@baseplayhouse.co"
                            ></input>
                          );
                        }}
                      />
                    </div>
                    <div className=" flex flex-col gap-2 ">
                      <p className=" font-medium text-[14px]">Role</p>
                      <Controller
                        control={control}
                        //แก้เป็นroleหลังแก้หลังบ้าน
                        name="status"
                        render={({
                          field: { value, name, onChange, onBlur },
                        }) => {
                          return (
                            <select
                              id="status"
                              name={name}
                              value={value}
                              onChange={onChange}
                              onBlur={onBlur}
                              className="bg-light-gray2 placeholder:text-dark-gray w-full h-10 rounded-[15px] pl-4"
                            >
                              <option value="" disabled>
                                Select
                              </option>
                              <option value="cdd">CDD</option>
                              <option value="hr">HR</option>
                              <option value="other">OTHER</option>
                            </select>
                          );
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col">
                  <span className="font-semibold text-[20px] pl-6 py-2">
                    Account Setting
                  </span>
                  <div className=" flex justify-between py-5 px-7">
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
                      <p>Enable/Disable Account</p>
                    </div>
                    <button
                      className=" bg-gradient-to-tr from-cancel-bl to-cancel-tr w-28 h-8 rounded-[15px] text-white"
                      onClick={() => {
                        // setIsCloseTicketModalOpen(true);
                        // setIsOpen(false);
                        // setFocusCloseTicketModal(initialTicket);
                      }}
                    >
                      Enable
                    </button>
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
                            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                          />
                        </svg>
                      </div>
                      <p>Sent Verify-Email</p>
                    </div>
                    <button
                      className=" bg-gradient-to-tr from-cancel-bl to-cancel-tr w-28 h-8 rounded-[15px] text-white"
                      onClick={() => {
                        // setIsCloseTicketModalOpen(true);
                        // setIsOpen(false);
                        // setFocusCloseTicketModal(initialTicket);
                      }}
                    >
                      Sent
                    </button>
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
                            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                          />
                        </svg>
                      </div>
                      <p>Sent Reset Password Link</p>
                    </div>
                    <button
                      className=" bg-gradient-to-tr from-cancel-bl to-cancel-tr w-28 h-8 rounded-[15px] text-white"
                      onClick={() => {
                        // setIsCloseTicketModalOpen(true);
                        // setIsOpen(false);
                        // setFocusCloseTicketModal(initialTicket);
                      }}
                    >
                      Sent
                    </button>
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
                            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                          />
                        </svg>
                      </div>
                      <p>Delete/Recovery Account</p>
                    </div>
                    <button
                      className=" bg-gradient-to-tr from-cancel-bl to-cancel-tr w-28 h-8 rounded-[15px] text-white"
                      onClick={() => {
                        // setIsCloseTicketModalOpen(true);
                        // setIsOpen(false);
                        // setFocusCloseTicketModal(initialTicket);
                      }}
                    >
                      Recovery
                    </button>
                  </div>
                </div>
                <div className="flex  items-center justify-center ">
                  <button
                    className=" bg-gradient-to-tr from-deep-blue to-bright-red w-64 h-14 rounded-[30px] text-white"
                    type="submit"
                  >
                    Save
                  </button>
                  {/* <button onClick={() => setIsOpen(false)}>Cancel</button> */}
                </div>
              </DialogPanel>
            </motion.div>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default EditAccountModal;
