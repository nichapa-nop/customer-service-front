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
            <DialogPanel className=" w-[920px] h-[920px] space-y-[50px] border rounded-xl bg-red-300 p-12 ">
              <DialogTitle className="font-semibold text-center text-[20px]">
                Close Ticket
              </DialogTitle>
              {/* <Description>
                This will permanently deactivate your account
              </Description> */}

              <div className=" bg-blue-300 p-6 h-[630px] rounded-xl">
                <p className="font-semibold text-[20px] pl-6">Customer Info</p>
                <div className="  bg-slate-500 p-3">
                  <div className="flex flex-col gap-2 bg-red-200 p-4">
                    <p>Solution</p>
                    <input
                      className=" w-full h-[250px] rounded-[15px] pl-4 hover:placeholder:text-space-black"
                      placeholder="Solution"
                    ></input>
                  </div>
                  <div className="flex flex-col gap-2 bg-red-200 p-4">
                    <p>Inform the customer</p>
                    <div className=" bg-yellow-300 w-full h-[150px] rounded-[15px] hover:placeholder:text-space-black">
                      <div className="flex bg-orange-400 items-center mt-1 space-x-3">
                        <input
                          type="checkbox"
                          className="w-[27px] h-[27px]"
                        ></input>
                        <span>Send email to Inform the customer</span>
                      </div>
                      <div className=" flex flex-col gap-2 bg-red-500 p-4 pl-10">
                        <p>Customer Email</p>
                        <input
                          className=" w-full h-10 rounded-[15px] pl-4 hover:placeholder:text-space-black"
                          placeholder="example.ee@baseplayhouse.co"
                        ></input>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 items-center justify-center ">
                <button className=" bg-gradient-to-tr from-deep-blue to-bright-red w-64 h-14 rounded-[30px] text-white">
                  Confirm
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
