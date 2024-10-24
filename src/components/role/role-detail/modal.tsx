import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  initialRole: RoleResponse;
  onClose?: () => void;
}

const RoleDetail: React.FC<Props> = ({
  isOpen,
  setIsOpen,
  initialRole,
  onClose,
}) => {
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
              <DialogPanel className="bg-light-gray2 w-[680px] space-y-[50px] border rounded-[30px] p-12">
                <div className="relative flex items-center justify-center">
                  <DialogTitle className="flex font-semibold text-[20px] text-center items-center">
                    Role Detail
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

                <div className="flex flex-col space-y-10 text-[14px] pb-8">
                  <div className="flex flex-col gap-4 px-4 capitalize">
                    <p>Role Name</p>
                    <span className="w-fit bg-gradient-to-tr from-deep-blue to-bright-red inline-block text-transparent bg-clip-text">
                      {initialRole.roleName}
                    </span>
                  </div>
                  <div className="flex flex-col gap-4 px-4 capitalize">
                    <p>Group Menu</p>
                    <span className="w-fit bg-gradient-to-tr from-deep-blue to-bright-red inline-block text-transparent bg-clip-text">
                      {`${
                        initialRole.groupMenu.name
                      }: ${initialRole.groupMenu.menus
                        .map((menu) => menu.menuName)
                        .join(", ")}`}
                    </span>
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

export default RoleDetail;
