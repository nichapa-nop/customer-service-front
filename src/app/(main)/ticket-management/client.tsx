"use client";

import React, { useEffect, useRef, useState } from "react";
import CreateTicket from "@/components/ticket/create-ticket/modal";
import EditTicketModal from "@/components/ticket/edit-ticket/modal";
import { useModalManager } from "@/components/modalmanager/page";
import TicketRow from "@/components/ticketrow/ticketrow";
import { getTicketList } from "@/actions/ticket.action";
import DeleteTicketSuccess from "@/components/ticket/delete-ticket-success/modal";
import EditTicketSuccess from "@/components/ticket/edit-ticket-success/modal";

type Props = {};

export default function TicketManagementClient({
  tickets: initialTickets,
}: {
  tickets: TicketResponse[];
}) {
  const [page, setPage] = useState<number>(1);
  const [pageCount, setPageCount] = useState<number>();
  const { activeModal, openModal, closeModal, isModalOpen } = useModalManager();
  const [isCreateTicketModalOpen, setIsCreateTicketModalOpen] =
    useState<boolean>(false);
  const [itemCount, setItemCount] = useState<number>(0);
  const [isEditTicketModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  // const [focusEditTicket, setFocusEditTicket] = useState<TicketResponse>();
  const [searchKeyword, setSearchKeyword] = useState<string>();
  const timeoutRef = useRef<NodeJS.Timeout>();
  const [isPageChanged, setIsPageChanged] = useState<boolean>(false);

  const handleCheckboxChange = (ticketId: string) => {
    setCheckedRows((prev) => ({ ...prev, [ticketId]: !prev[ticketId] }));
  };

  const [tickets, setTickets] = useState<TicketResponse[]>(initialTickets);
  const [checkedRows, setCheckedRows] = useState<Record<string, boolean>>({});
  const [focusEditTicket, setFocusEditTicket] = useState<
    TicketResponse | undefined
  >(undefined);

  const [isDeleteTicketSuccessModalOpen, setIsDeleteTicketSuccessModalOpen] =
    useState<boolean>(false);
  const [latestDeleteTicket, setLatestDeleteTicket] =
    useState<TicketResponse>();

  const [isEditTicketSuccessModalOpen, setIsEditTicketSuccessModalOpen] =
    useState<boolean>(false);

  async function fetchLastestTickets(page: number = 1, keyword?: string) {
    const response = await getTicketList({ page, keyword });
    setTickets(response.data);
    setPageCount(
      Math.ceil(
        response.pagination.itemsCount / response.pagination.itemsPerpage
      )
    );
    setItemCount(response.pagination.itemsCount); // Set the item count here
  }

  useEffect(() => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      fetchLastestTickets(1, searchKeyword);
    }, 1000);
  }, [searchKeyword]);

  // console.log(page);
  useEffect(() => {
    if (isPageChanged) {
      fetchLastestTickets(page);
    }
  }, [page]);

  useEffect(() => {
    setTickets(initialTickets);
  }, [initialTickets]);

  return (
    <div className="bg-white h-full w-full flex">
      <div className="w-full">
        <div className="flex w-full items-center justify-center ">
          <div className="h-screen w-full shadow-lg rounded-lg  items-center justify-center">
            {/* <div className="pt-6 px-6 p-2"> */}
            <div className="pt-6">
              <div className=" flex flex-col h-full mx-6 text-[14px]">
                <div className="grid grid-cols-7 space-x-4 h-[44px]  justify-center items-center mb-2">
                  <label className="flex items-center col-span-4 h-full rounded-[20px] px-4 space-x-3 shadow-light2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-[21px] "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                      />
                    </svg>

                    <input
                      id="searchbox"
                      placeholder="Search"
                      className="grow focus:placeholder:text-white focus:outline-none placeholder:text-transparent placeholder:bg-clip-text placeholder:bg-gradient-to-tr from-deep-blue to-bright-red"
                      onChange={(e) => {
                        setSearchKeyword(e.target.value);
                      }}
                    ></input>
                  </label>
                  <button className="flex flex-row items-center justify-center px-10 bg-white h-full rounded-[20px] shadow-light2 space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
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
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15"
                        stroke="url(#gradient1)"
                      />
                    </svg>

                    <span className="bg-gradient-to-tr from-deep-blue to-bright-red inline-block text-transparent bg-clip-text">
                      Export
                    </span>
                  </button>
                  <button className="flex flex-row items-center justify-center px-10 bg-white h-full rounded-[20px] shadow-light2 space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      className="size-6"
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
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
                        stroke="url(#gradient1)"
                      />
                    </svg>
                    <span className="bg-gradient-to-tr from-deep-blue to-bright-red inline-block text-transparent bg-clip-text">
                      Filter
                    </span>
                  </button>
                  <button
                    type="button"
                    className="flex flex-row items-center justify-center px-6 bg-gradient-to-tr from-deep-blue to-bright-red text-white h-full bg-white rounded-[20px] shadow-light2 space-x-2"
                    // className="flex flex-row items-center justify-between px-6 bg-gradient-to-tr from-deep-blue to-bright-red text-white h-full rounded-[20px] shadow-light2"
                    onClick={() => openModal("create")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                    <span className="text-[14px]">New Ticket</span>
                  </button>

                  <CreateTicket
                    isOpen={isModalOpen("create")}
                    setIsOpen={(isOpen) =>
                      isOpen ? openModal("create") : closeModal()
                    }
                  />
                </div>
              </div>
              {/* <div className="flex flex-col"> */}
              <div className="overflow-x-auto text-[14px]">
                <table className="bg-white w-full table-fixed items-center justify-center text-center">
                  <colgroup>
                    <col className="w-[7%]" />
                    <col className="w-[10%]" />
                    <col className="w-[17%]" />
                    <col className="w-[11%]" />
                    <col className="w-[15%]" />
                    <col className="w-[3%]" />
                    <col className="w-[15%]" />
                    <col className="w-[12%]" />
                    <col className="w-[10%]" />
                  </colgroup>
                  <thead>
                    <tr className="h-[68px] ">
                      <th className="px-2">
                        {/* <input
                        type="checkbox"
                        className="appearance-none rounded-md cursor-pointer checked:bg-gradient-to-tr from-deep-blue to-bright-red w-[27px] h-[27px] border-light-gray1 border-[2px]"
                      ></input> */}
                        <input
                          type="checkbox"
                          className="appearance-none rounded-md cursor-pointer checked:bg-gradient-to-tr from-deep-blue to-bright-red w-[27px] h-[27px] border-light-gray1 border-[2px] relative
                            checked:after:content-[''] checked:after:absolute checked:after:left-[8px] checked:after:top-[3px] checked:after:w-[7px] checked:after:h-[14px] checked:after:border-white checked:after:border-r-[2px] checked:after:border-b-[2px] checked:after:rotate-45"
                        ></input>
                      </th>
                      <th>Ticket ID</th>
                      <th className="w-44">Topic</th>
                      <th>Platform</th>
                      <th>Incident Type</th>
                      <th>BI</th>
                      <th>Assign To</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* <tr
                  // key={ticket.ticketId}
                  // className={`h-[60px] ${
                  //   checkedRows[ticket.ticketId] ? "bg-light-orange" : ""
                  // }`}
                  >
                  </tr> */}
                    {tickets.map((ticket) => (
                      <TicketRow
                        key={ticket.ticketId}
                        ticket={ticket}
                        checkedRows={checkedRows}
                        handleCheckboxChange={handleCheckboxChange}
                        setIsDeleteSuccessModalOpen={
                          setIsDeleteTicketSuccessModalOpen
                        }
                        setLatestDeleteTicket={setLatestDeleteTicket}
                        setIsEditSuccessModalOpen={
                          setIsEditTicketSuccessModalOpen
                        }
                      />
                    ))}
                  </tbody>
                </table>
              </div>
              {/* <div className=" grid grid-rows-9 h-full bg-pink-200 "></div>
            </div> */}
              <footer className="flex justify-between items-center p-3">
                <div className="mx-4 text-dark-gray">{itemCount} Items</div>
                <div className=" flex space-x-5 items-center">
                  {/* {page <= 0 && ( */}
                  <button
                    className="flex bg-light-gray1 h-[34px] w-[34px] rounded-[20px]  items-center justify-center"
                    onClick={() => {
                      setIsPageChanged(true);
                      setPage(page - 1);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="white"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5 8.25 12l7.5-7.5"
                      />
                    </svg>
                  </button>
                  {/* )} */}
                  <input
                    className="outline outline-light-gray1 w-20 h-11 rounded-[15px] text-center"
                    placeholder={`${page}`}
                  ></input>
                  <button
                    className="flex bg-light-gray1 h-[34px] w-[34px] rounded-[20px]  items-center justify-center"
                    onClick={() => {
                      setIsPageChanged(true);
                      setPage(page + 1);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="white"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </button>
                  <span>Page {page} from 10</span>
                </div>
              </footer>
            </div>
            {isDeleteTicketSuccessModalOpen && latestDeleteTicket && (
              <DeleteTicketSuccess
                isOpen={isDeleteTicketSuccessModalOpen}
                setIsOpen={setIsDeleteTicketSuccessModalOpen}
                ticketId={latestDeleteTicket.ticketId}
              />
            )}
            {isEditTicketSuccessModalOpen && (
              <EditTicketSuccess
                isOpen={isEditTicketSuccessModalOpen}
                setIsOpen={setIsEditTicketSuccessModalOpen}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
