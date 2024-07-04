import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

type ModalProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isVisible?: boolean;
  onClose?: () => void;
  children: React.ReactNode;
};

export default function Modal({
  isVisible,
  children,
  isOpen,
  setIsOpen,
  ...rest
}: ModalProps) {
  const animateProps = {
    initial: { opacity: 0, y: "-50%" },
    animate: { opacity: 1, x: "0%", y: "0%" },
    exit: { opacity: 0, y: "-50%" },
    transition: { ease: "easeInOut", duration: 0.3 },
  };

  return (
    // <div>{isOpen && <span className="bg-black">Text</span>}</div>
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className={classNames(
              "w-screen h-screen absolute"
              //   "bg-red-300 left-0 top-0 z-[1055] block w-full h-full overflow-y-auto overflow-x-hidden"
            )}
            role="dialog"
            tabIndex={-1}
            {...animateProps}
            {...rest}
          >
            <div
              className={classNames(
                "pointer-events-none relative mx-auto text-orange-500 my-6 bg-green-300"
              )}
            >
              XXXXXsss
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
