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
import CreateAccountSuccess from "../create-account-success/modal";

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  onClose?: () => void;
  initialRoles: RoleResponse[];
}

type AccountSchema = z.infer<typeof accountSchema>;

const CreateAccountModal: React.FC<Props> = ({
  isOpen,
  setIsOpen,
  onClose,
  initialRoles,
}) => {
  const [isCreateAccountSuccesModalOpen, setIsCreateAccountSuccessModalOpen] =
    useState<boolean>(false);

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
      const result = await createAccount({ ...data, roleId: +data.roleId });
      if (result.success && result.data) {
        toast.success("Create account success"),
          {
            position: "bottom-center",
          };
        console.log(result.data.uuid);

        openModal();
      } else {
        console.log(result.status);
        if (result.status === 409) {
          toast.error("This email is already exist");
        }
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

  // console.log(watch());

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
              <DialogPanel className="bg-white w-[850px] space-y-[50px] border rounded-[30px] p-12">
                <DialogTitle className="font-semibold text-center text-[20px] mt-6 mb-10">
                  Create New Account
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
                <div className="px-6 rounded-xl">
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
                              className="bg-light-gray2 placeholder:text-dark-gray w-full h-10 rounded-[15px] pl-4  hover:placeholder:text-space-black"
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
                              className="bg-light-gray2 placeholder:text-dark-gray hover:placeholder:text-space-black w-full h-10 rounded-[15px] pl-4"
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
                              className="bg-light-gray2 placeholder:text-dark-gray hover:placeholder:text-space-black w-full h-10 rounded-[15px] pl-4"
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
                              className="bg-light-gray2 placeholder:text-dark-gray hover:placeholder:text-space-black w-full h-10 rounded-[15px] pl-4"
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
                              className="bg-light-gray2 placeholder:text-dark-gray hover:placeholder:text-space-black w-full h-10 rounded-[15px] pl-4"
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
                              className="bg-light-gray2 placeholder:text-dark-gray hover:placeholder:text-space-black w-full h-10 rounded-[15px] pl-4"
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
                        name="roleId"
                        render={({
                          field: { value, name, onChange, onBlur },
                        }) => {
                          return (
                            <select
                              id="role"
                              name={name}
                              value={value}
                              onChange={onChange}
                              onBlur={onBlur}
                              className={`bg-light-gray2 placeholder:text-dark-gray w-full h-10 rounded-[15px] pl-4 capitalize`}
                            >
                              <option className="select-disabled" value="">
                                Select
                              </option>
                              {initialRoles.map((role) => (
                                <option
                                  className={`bg-white rounded-[15px] ${
                                    role.roleName == "ceo"
                                      ? "uppercase"
                                      : "capitalize"
                                  }`}
                                  label={
                                    ["ceo"].includes(role.roleName)
                                      ? role.roleName.toUpperCase()
                                      : role.roleName
                                  }
                                  value={role.id}
                                >
                                  {["ceo"].includes(role.roleName)
                                    ? role.roleName.toUpperCase()
                                    : role.roleName}
                                </option>
                              ))}
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
                </div>
              </DialogPanel>
            </motion.div>
          </div>
        </form>
      </Dialog>
      <CreateAccountSuccess
        isOpen={isCreateAccountSuccesModalOpen}
        setIsOpen={setIsCreateAccountSuccessModalOpen}
        onClose={() => setIsCreateAccountSuccessModalOpen(false)}
      />
    </>
  );
};

export default CreateAccountModal;
