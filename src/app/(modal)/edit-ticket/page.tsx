"use client";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useState } from "react";

export default function Example() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open dialog</button>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 w-screen overflow-y-auto p-1">
          <div className="flex min-h-full  items-center justify-center">
            <DialogPanel className=" w-[1000px] space-y-[50px] border rounded-xl bg-red-300 p-12">
              <DialogTitle className="font-semibold text-center text-[20px]">
                Edit Ticket
              </DialogTitle>
              {/* <Description>
                This will permanently deactivate your account
              </Description> */}
              <div className=" bg-blue-300 p-6 h-[480px] rounded-xl">
                <p className="font-semibold text-[20px] pl-6">Ticket ID</p>
              </div>

              <div className=" bg-blue-300 p-6 h-[480px] rounded-xl">
                <p className="font-semibold text-[20px] pl-6">Customer Info</p>
                <div className="grid grid-cols-2 gap-2  bg-slate-500 p-3">
                  <div className="flex flex-col gap-2 bg-red-200 p-4">
                    <p>First Name (EN)</p>
                    <input
                      className=" w-full h-10 rounded-[15px] pl-4"
                      placeholder="Nichapa"
                    ></input>
                  </div>
                  <div className="flex flex-col gap-2 bg-lime-200 p-4">
                    <p>Last Name (EN)</p>
                    <input
                      className=" w-full h-10 rounded-[15px] pl-4"
                      placeholder="Nopparat"
                    ></input>
                  </div>
                  <div className="flex flex-col gap-2 bg-lime-200 p-4">
                    <p>Phone Number</p>
                    <input
                      className=" w-full h-10 rounded-[15px] pl-4"
                      placeholder="0123456789"
                    ></input>
                  </div>
                  <div className="flex flex-col gap-2 bg-red-200 p-4">
                    <p>Type</p>
                    <input
                      className=" w-full h-10 rounded-[15px] pl-4"
                      placeholder="Select"
                    ></input>
                  </div>
                  <div className=" flex flex-col gap-2 bg-red-200 p-4">
                    <p>Email</p>
                    <input
                      className=" w-full h-10 rounded-[15px] pl-4"
                      placeholder="ee@baseplayhouse.co"
                    ></input>
                  </div>
                  <div className=" flex flex-col gap-2 bg-lime-200 p-4">
                    <p>Company Name</p>
                    <input
                      className=" w-full h-10 rounded-[15px] pl-4"
                      placeholder="BASE PLAYHOUSE CO. TLD."
                    ></input>
                  </div>
                </div>
              </div>
              <div className="p-6 rounded-xl bg-pink-300 h-[420px]">
                <p className="font-semibold text-[20px] mb-2  pl-6">
                  System Info
                </p>
                <div className="grid grid-cols-2 gap-2  bg-slate-500 p-3">
                  <div className="flex flex-col gap-2 bg-red-200 p-4">
                    <p>Platform</p>
                    <input
                      className=" w-full h-10 rounded-[15px] pl-4"
                      placeholder="Nichapa"
                    ></input>
                  </div>
                  <div className="flex flex-col gap-2 bg-lime-200 p-4">
                    <p>Incident Type</p>
                    <input
                      className=" w-full h-10 rounded-[15px] pl-4"
                      placeholder="Nopparat"
                    ></input>
                  </div>
                  <div className="flex flex-col gap-2 bg-lime-200 p-4">
                    <p>Business Impact</p>
                    <input
                      className=" w-full h-10 rounded-[15px] pl-4"
                      placeholder="Nichapa"
                    ></input>
                  </div>
                  <div className="flex flex-col gap-2 bg-red-200 p-4">
                    <p>Feedback Channels</p>
                    <input
                      className=" w-full h-10 rounded-[15px] pl-4"
                      placeholder="Nichapa"
                    ></input>
                  </div>
                  <div className="flex flex-col gap-2 bg-red-200 p-4">
                    <p>Ticket Link</p>
                    <input
                      className=" w-full h-10 rounded-[15px] pl-4"
                      placeholder="Nichapa"
                    ></input>
                  </div>
                </div>
              </div>
              <div className="flex flex-col p-6 rounded-xl bg-green-300 h-[500px]">
                <p className=" font-semibold text-[20px] pl-6">General Info</p>
                <div className=" bg-slate-500 p-3">
                  <div className="flex flex-col gap-2 bg-red-200 p-4">
                    <p>Topic</p>
                    <input
                      className=" w-full h-10 rounded-[15px] pl-4"
                      placeholder="Text"
                    ></input>
                  </div>
                  <div className="flex flex-col gap-2 bg-lime-200 p-4">
                    <p>Description</p>
                    <input
                      className=" w-full h-[240px] rounded-[15px] pl-4 "
                      placeholder="Text"
                    ></input>
                  </div>
                </div>
              </div>
              <div className=" p-6 rounded-xl bg-cyan-300 h-80">
                <p className=" font-semibold text-[20px] pl-6">CS Info</p>
                <div className="grid grid-cols-2 gap-2  bg-slate-500 p-3">
                  <div className="flex flex-col gap-2 bg-red-200 p-4">
                    <p>First Name (EN)</p>
                    <input
                      className=" w-full h-10 rounded-[15px] pl-4"
                      placeholder="Nichapa"
                    ></input>
                  </div>
                  <div className="flex flex-col gap-2 bg-lime-200 p-4">
                    <p>Last Name (EN)</p>
                    <input
                      className=" w-full h-10 rounded-[15px] pl-4"
                      placeholder="Nopparat"
                    ></input>
                  </div>
                  <div className="col-span-2 flex flex-col gap-2 bg-lime-200 p-4">
                    <p>Assign To</p>
                    <input
                      className=" w-full h-10 rounded-[15px] pl-4"
                      placeholder="ee@baseplayhouse.co"
                    ></input>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 items-center justify-center ">
                <button className=" bg-slate-600 w-64 h-14 rounded-[30px] text-white">
                  Create Ticket
                </button>
                {/* <button onClick={() => setIsOpen(false)}>Cancel</button> */}
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
