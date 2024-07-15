"use client";
import {
  Description,
  Dialog,
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
        <div className="fixed inset-0 w-screen overflow-y-auto p-1">
          <div className="flex min-h-full  items-center justify-center">
            <DialogPanel className=" w-[650px] h-[400px] space-y-[50px] border rounded-xl bg-red-300 p-12 ">
              {/* <Description>
                This will permanently deactivate your account
              </Description> */}
              <div className="flex justify-center items-center mt-7">
                <img src={successpic.src} className="h-[90px] w-[90px] "></img>
              </div>

              <div className="flex flex-col bg-blue-300 h-[120px] rounded-xl items-center justify-center">
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
