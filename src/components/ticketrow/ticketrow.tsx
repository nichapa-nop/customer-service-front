// components/TicketRow.tsx
import React, { useState } from "react";
// import TicketResponse  from '@/api-interface/ticket.interface'; // Adjust import based on your project structure
import EditTicketModal from "@/components/ticket/edit-ticket/modal"; // Adjust import as necessary

interface TicketRowProps {
  ticket: TicketResponse;
  checkedRows: Record<string, boolean>;
  handleCheckboxChange: (ticketId: string) => void;
  //   openModal: (modalType: string) => void;
  //   closeModal: () => void;
  //   isModalOpen: (modalType: string) => boolean;
}

const TicketRow: React.FC<TicketRowProps> = ({
  ticket,
  checkedRows,
  handleCheckboxChange,
  //   setFocusEditTicket,
  //   openModal,
  //   closeModal,
  //   isModalOpen,
  //   focusEditTicket,
}) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);

  return (
    <tr
      key={ticket.ticketId}
      className={`h-[60px] ${
        checkedRows[ticket.ticketId] ? "bg-light-orange" : ""
      }`}
    >
      <td>
        <input
          type="checkbox"
          className="appearance-none rounded-md cursor-pointer checked:bg-gradient-to-tr from-deep-blue to-bright-red w-[27px] h-[27px] border-light-gray1 border-[2px] relative
        checked:after:content-[''] checked:after:absolute checked:after:left-[8px] checked:after:top-[3px] checked:after:w-[7px] checked:after:h-[14px] checked:after:border-white checked:after:border-r-[2px] checked:after:border-b-[2px] checked:after:rotate-45"
          checked={checkedRows[ticket.ticketId] || false}
          onChange={() => handleCheckboxChange(ticket.ticketId)}
        />
      </td>
      <td>{ticket.ticketId}</td>
      <td>{ticket.topic}</td>
      <td>{ticket.platform}</td>
      <td>{ticket.incidentType}</td>
      <td>{ticket.businessImpact}</td>
      <td>
        {ticket.assignTo?.firstName && ticket.assignTo?.lastName
          ? `${ticket.assignTo?.firstName} ${ticket.assignTo?.lastName}`
          : "-"}
      </td>
      <td>{ticket.status}</td>
      <td className="space-x-2">
        <button
          onClick={() => {
            //   setFocusEditTicket(ticket);
            //   openModal("edit");
            setIsEditModalOpen(true);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
            <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
          </svg>
        </button>
        {isEditModalOpen && (
          <EditTicketModal
            initialTicket={ticket}
            isOpen={isEditModalOpen}
            setIsOpen={setIsEditModalOpen}
          />
        )}
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            {/* SVG paths */}
          </svg>
        </button>
      </td>
    </tr>
  );
};

export default TicketRow;
