import React, { Dispatch, SetStateAction, useState } from "react";

interface AccountRowProps {
  account: AccountResponse;
}

const AccountRow: React.FC<AccountRowProps> = ({ account }) => {
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
    <tr key={account.uuid} className="h-[68px]">
      <td className="w-[20%]">
        <div className="flex flex-col items-start pl-10">
          <span className="truncate">
            {account.firstName} {account.lastName}
          </span>
          <span className="text-dark-gray">Trainee</span>
        </div>
      </td>
      <td className="w-[30%]">{account.email}</td>
      <td className="w-[30%]">{account.phoneNum}</td>
      <td className="w-[30%]">
        <div className="flex justify-center items-center">
          <div
            className={`flex justify-center items-center w-[118px] h-[35px] rounded-[15px] text-white text ${getStatusBackgroundColor(
              account.status
            )}`}
          >
            <span className="truncate px-2">{account.status}</span>
          </div>
        </div>
      </td>
      <td className="w-[10%] space-x-3">
        <button
        // onClick={() => {
        //   // setIsEditModalOpen(true);
        // }}
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
        {/* {isEditModalOpen && (
          <EditAccountModal
            initialAccount={Account}
            isOpen={isEditModalOpen}
            setIsOpen={setIsEditModalOpen}
          />
        )} */}
        <button
          onClick={() => {
            // setIsDeleteModalOpen(true);
          }}
        >
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
        {/* {isDeleteModalOpen && (
          <DeleteAccountModal
            initialAccount={Account}
            isOpen={isDeleteModalOpen}
            setIsOpen={setIsDeleteModalOpen}
          />
        )}
        {isAccountDetailModalOpen && (
          <AccountDetail
            initialAccount={Account}
            isOpen={isAccountDetailModalOpen}
            setIsOpen={setIsAccountDetailModalOpen}
          />
        )} */}
      </td>
    </tr>
  );
};

export default AccountRow;
