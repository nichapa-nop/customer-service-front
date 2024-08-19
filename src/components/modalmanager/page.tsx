import { useState } from "react";

type ModalType = "create" | "edit" | null;

export function useModalManager() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const openModal = (modalType: "create" | "edit") => {
    // ถ้ามี Modal อื่นเปิดอยู่ ให้ปิดก่อน
    if (activeModal !== null && activeModal !== modalType) {
      // ทำการปิด Modal ที่เปิดอยู่ (อาจจะต้องเพิ่มโค้ดเพื่อจัดการการปิด Modal ตามที่คุณต้องการ)
      console.log(`Closing ${activeModal} modal`);
    }

    // เปิด Modal ใหม่
    setActiveModal(modalType);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return {
    activeModal,
    openModal,
    closeModal,
    isModalOpen: (modalType: "create" | "edit") => activeModal === modalType,
  };
}
