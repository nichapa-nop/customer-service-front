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

  const getStatusBackgroundColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "in progress":
        return "bg-gradient-to-tr relative from-waiting-bl to-waiting-tr";
      case "open":
        return "bg-gradient-to-tr relative from-approve-bl to-approve-tr";
      case "closed":
        return "bg-gradient-to-tr relative from-cancel-bl to-cancel-tr";
      case "deleted":
        return "bg-dark-gray";
      default:
        return "";
    }
  };

  return (
    <tr
      key={ticket.ticketId}
      className={`capitalize h-[60px] ${
        checkedRows[ticket.ticketId] ? "bg-light-orange" : ""
      }`}
    >
      <td className="justify-center w-[5%]">
        <input
          type="checkbox"
          className="appearance-none rounded-md cursor-pointer checked:bg-gradient-to-tr from-deep-blue to-bright-red w-[27px] h-[27px] border-light-gray1 border-[2px] relative
        checked:after:content-[''] checked:after:absolute checked:after:left-[8px] checked:after:top-[3px] checked:after:w-[7px] checked:after:h-[14px] checked:after:border-white checked:after:border-r-[2px] checked:after:border-b-[2px] checked:after:rotate-45"
          checked={checkedRows[ticket.ticketId] || false}
          onChange={() => handleCheckboxChange(ticket.ticketId)}
        />
      </td>
      <td className="w-[10%] truncate">{ticket.ticketId}</td>
      <td className="w-[17%] truncate px-5 text-left">{ticket.topic}</td>
      <td className="w-[11%] truncate">{ticket.platform}</td>
      <td className="w-[15%] truncate">{ticket.incidentType}</td>
      <td className="w-[3%] truncate">{ticket.businessImpact}</td>
      <td className="w-[15%]">
        <div className="flex flex-col">
          <span className="truncate">
            {ticket.assignTo?.firstName
              ? `${ticket.assignTo?.firstName}`
              : "firstname"}
          </span>
          <span className="truncate">
            {ticket.assignTo?.lastName
              ? `${ticket.assignTo?.lastName}`
              : "lastname"}
          </span>
        </div>
      </td>
      <td className="w-[12%]">
        <div
          className={`flex justify-center items-center h-9 rounded-[15px] text-white ${getStatusBackgroundColor(
            ticket.status
          )}`}
        >
          <span className="truncate px-6">{ticket.status}</span>
        </div>
      </td>
      <td className="w-[12%] space-x-2">
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
            className="size-6 "
          >
            <defs>
              <linearGradient
                id="gradient1"
                x1="0%"
                y1="100%"
                x2="100%"
                y2="0%"
              >
                <stop
                  offset="0%"
                  style={{ stopColor: "#1f1a4f", stopOpacity: 1 }}
                />
                {/* deep-blue */}
                <stop
                  offset="50%"
                  style={{ stopColor: "#82303d", stopOpacity: 1 }}
                />
                {/* fade-purple */}
                <stop
                  offset="100%"
                  style={{ stopColor: "#ec4723", stopOpacity: 1 }}
                />
                {/* bright-red */}
              </linearGradient>
            </defs>
            <path
              fillRule="evenodd"
              d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
              clipRule="evenodd"
              fill="url(#gradient1)"
            />
          </svg>
        </button>
      </td>
    </tr>
  );
};

export default TicketRow;
