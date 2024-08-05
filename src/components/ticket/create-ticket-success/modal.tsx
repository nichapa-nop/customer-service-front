"use client";
import {
  Description,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  Transition,
} from "@headlessui/react";
import { Fragment, useState } from "react";
import successpic from "../../../../../../img/success.png";

interface CreateTicketSuccessModal {
  isOpen: boolean;
  onClose: () => void;
}

const CreateTicket: React.FC<CreateTicketSuccessModal> = ({
  isOpen,
  onClose,
}) => {
  //   let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Transition appear show={isOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0" />
        </Transition.Child>
        <Dialog
          open={isOpen}
          onClose={() => onClose()}
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
                    Ticket #INC000xx has been created!
                  </p>
                  <p className=" text-[16px] text-center">
                    You can access and manage this ticket details through the
                    <br />
                    'Ticket Management' section accessible from the sidebar.
                  </p>
                </div>
              </DialogPanel>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
