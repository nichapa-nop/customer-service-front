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
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { accountSchema } from "@/schemas/account.schema";
import { createAccount } from "@/actions/account.action";
import toast from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  onClose?: () => void;
}

type AccountSchema = z.infer<typeof accountSchema>;

const CreateAccountModal: React.FC<Props> = ({
  isOpen,
  setIsOpen,
  onClose,
}) => {
  const [
    isCreateAccountSuccesModalSuccess,
    setIsCreateAccountSuccessModalOpen,
  ] = useState(false);

  const openModal = () => {
    setIsCreateAccountSuccessModalOpen(true);
    if (onClose) {
      onClose();
    } else {
      setIsOpen(false);
    }
  };

  const processForm: SubmitHandler<AccountSchema> = async (data) => {
    try {
      const result = await createAccount(data);
      if (result.success) {
        toast.success("Create account success"),
          {
            position: "bottom-center",
          };
        openModal();
      }
    } catch (error) {
      toast.error("failed to create account"),
        {
          position: "bottom-center",
        };
    }
  };

  const {
    control,
    watch,
    handleSubmit,
    formState: { isValid, errors },
    reset,
  } = useForm<AccountSchema>({
    mode: "onChange",
    resolver: zodResolver(accountSchema),
    defaultValues: {},
  });

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
              <DialogPanel className="bg-light-gray2 w-[850px] space-y-[50px] border rounded-[30px] p-12">
                <DialogTitle className="font-semibold text-center text-[20px] mt-6 mb-10">
                  Create New Account
                </DialogTitle>
                {/* <Description>
                            This will permanently deactivate your account
                          </Description> */}

                <div className="px-6 rounded-xl">
                  {/* <p className="font-semibold text-[20px] pl-6">
                              Customer Info
                            </p> */}
                  <div className="grid grid-cols-2 gap-x-9 gap-y-6 ">
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
                              value={value}
                              name={name}
                              onChange={onChange}
                              onBlur={onBlur}
                              className="bg-light-gray2 placeholder:text-dark-gray w-full h-10 rounded-[15px] pl-4"
                              placeholder="Nichapa"
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
                        name="email"
                        render={({
                          field: { value, name, onChange, onBlur },
                        }) => {
                          return (
                            <select
                              id="email"
                              name={name}
                              value={value}
                              onChange={onChange}
                              onBlur={onBlur}
                              className="bg-light-gray2 placeholder:text-dark-gray w-full h-10 rounded-[15px] pl-4"
                            >
                              <option value="" disabled>
                                Select
                              </option>
                              {/* <option value="cdd">CDD</option>
                              <option value="hr">HR</option>
                              <option value="other">OTHER</option> */}
                            </select>
                          );
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex  items-center justify-center ">
                  <button
                    className=" bg-gradient-to-tr from-deep-blue to-bright-red w-64 h-14 rounded-[30px] text-white"
                    type="submit"
                    disabled={!isValid}
                  >
                    Create Account
                  </button>
                  {/* <button onClick={() => setIsOpen(false)}>Cancel</button> */}
                </div>
              </DialogPanel>
            </motion.div>
          </div>
        </form>
      </Dialog>
    </>
  );
};

export default CreateAccountModal;
