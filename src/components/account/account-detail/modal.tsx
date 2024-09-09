import {
  Description,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  Transition,
} from "@headlessui/react";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  initialAccount: AccountResponse;
  onClose?: () => void;
}

const AccountDetail: React.FC<Props> = ({
  isOpen,
  setIsOpen,
  initialAccount,
  onClose,
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
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <span className="font-semibold text-[20px] pl-6 ">
                    Account Information
                  </span>
                  <div className="grid grid-cols-2 gap-2 p-3">
                    <div className="flex flex-col gap-4 p-4">
                      <p>First Name (EN)</p>
                      <span className="bg-gradient-to-tr from-deep-blue to-bright-red inline-block text-transparent bg-clip-text">
                        {initialAccount.firstName}
                      </span>
                    </div>
                    <div className="flex flex-col gap-4 p-4">
                      <p>Last Name (EN)</p>
                      <span className="bg-gradient-to-tr from-deep-blue to-bright-red inline-block text-transparent bg-clip-text">
                        {initialAccount.lastName}
                      </span>
                    </div>
                    <div className="flex flex-col gap-4 p-4">
                      <p>First Name (TH)</p>
                      <span className="bg-gradient-to-tr from-deep-blue to-bright-red inline-block text-transparent bg-clip-text">
                        {initialAccount.firstNameTh}
                      </span>
                    </div>
                    <div className="flex flex-col gap-4 p-4">
                      <p>Last Name (TH)</p>
                      <span className="bg-gradient-to-tr from-deep-blue to-bright-red inline-block text-transparent bg-clip-text">
                        {initialAccount.lastNameTh}
                      </span>
                    </div>
                    <div className="flex flex-col gap-4 p-4">
                      <p>Email</p>
                      <span className="bg-gradient-to-tr from-deep-blue to-bright-red inline-block text-transparent bg-clip-text">
                        {initialAccount.email}
                      </span>
                    </div>
                    <div className="flex flex-col gap-4 p-4">
                      <p>Phone Number</p>
                      <span className="bg-gradient-to-tr from-deep-blue to-bright-red inline-block text-transparent bg-clip-text">
                        {initialAccount.phoneNum}
                      </span>
                    </div>
                    <div className="flex flex-col gap-4 p-4">
                      <p>Role</p>
                      <span className="bg-gradient-to-tr from-deep-blue to-bright-red inline-block text-transparent bg-clip-text">
                        {initialAccount.email}
                      </span>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </motion.div>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default AccountDetail;
