"use client";
import {
  Description,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useState } from "react";
import warningpic from "../../../../../../img/warning.png";

export default function DeleteTicket() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open dialog</button>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <DialogBackdrop className="fixed inset-0 bg-black/30" />

        <div className="fixed inset-0 w-screen overflow-y-auto p-1">
          <div className="flex min-h-full  items-center justify-center">
            <DialogPanel className="bg-white w-[650px] h-[460px] border rounded-[20px] p-12 ">
              {/* <Description>
                This will permanently deactivate your account
              </Description> */}
              <div className="flex justify-center items-center mt-8 mb-5">
                <img
                  src={warningpic.src}
                  className="h-[100px] w-[100px] "
                ></img>
              </div>

              <div className="flex flex-col h-[120px] rounded-xl mb-6 items-center justify-center">
                <p className="font-semibold text-[20px] mb-3 text-center">
                  Are you sure you want to delete Ticket #INC000xx?
                </p>
                <p className=" text-[16px] text-center">
                  Please confirm your intention to delete this ticket. This
                  action is <br />
                  irreversible and will permanently remove this ticket from the
                  system.
                </p>
              </div>
              <div className="flex gap-4 items-center justify-center ">
                <button className=" bg-gradient-to-tr from-deep-blue to-bright-red w-64 h-14 rounded-[30px] text-white">
                  Delete
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
