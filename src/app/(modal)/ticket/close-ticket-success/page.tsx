"use client";
import {
  Description,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useState } from "react";
import successpic from "../../../../../img/success.png";

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
        <DialogBackdrop className="fixed inset-0 bg-black/30" />

        <div className="fixed inset-0 w-screen overflow-y-auto p-1">
          <div className="flex min-h-full  items-center justify-center">
            <DialogPanel className="bg-white w-[650px] h-[400px] border rounded-[20px] p-12 ">
              {/* <Description>
                This will permanently deactivate your account
              </Description> */}
              <div className="flex justify-center items-center mt-8 mb-6">
                <img
                  src={successpic.src}
                  className="h-[100px] w-[100px] "
                ></img>
              </div>

              <div className="flex flex-col h-[120px] rounded-xl items-center justify-center">
                <p className="font-semibold text-[20px]  mb-3 text-center">
                  Ticket #INC000xx has been closed
                </p>
                <p className=" text-[16px] text-center">
                  To re-open this ticket, please access the ticket list page and
                  <br />
                  use the 'Edit' icon associated with this ticket number.
                </p>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
