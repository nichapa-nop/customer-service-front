"use client";

import { getTicket } from "@/actions/getticket.action";
import React, { useEffect, useState } from "react";

export default function TicketManagementClient({
  tickets: initialTickets,
}: {
  tickets: TicketResponse[];
}) {
  // let [isOpen, setIsOpen] = useState(false);

  // const openModal = () => {
  //   setIsOpen(true);
  // };

  // const closeModal = () => {
  //   setIsOpen(false);
  // };

  const [page, setPage] = useState<number>(1);
  const [tickets, setTickets] = useState<TicketResponse[]>([]);
  const [pageCount, setPageCount] = useState<number>();

  async function getTicketList(page: number = 1) {
    const response = await getTicket({ page });
    setTickets(response.data);
    setPageCount(
      Math.ceil(
        response.pagination.itemsCount / response.pagination.itemsPerpage
      )
    );
  }

  useEffect(() => {
    getTicketList(page);
  }, [page]);

  return (
    <div className="h-full w-full flex ">
      <div className="w-full">
        <div className="flex w-full items-center justify-center ">
          <div className="h-screen w-full  shadow-lg rounded-lg  items-center justify-center">
            <div className="pt-6 px-6 p-2">
              <div className="mt-6 mb-10">
                <span className="text-lg md:text-xl lg:text-2xl font-semibold ">
                  Ticket Management
                </span>
              </div>

              <div className=" flex flex-col h-full">
                <div className="grid grid-cols-7 space-x-2 h-[50px]  justify-center items-center mb-2">
                  <input
                    id="searchbox"
                    placeholder="search"
                    className=" col-span-4 h-10 rounded-[20px] pl-4"
                  ></input>
                  <button className="bg-white h-10 rounded-[20px]">
                    export
                  </button>
                  <button className="bg-white h-10 rounded-[20px]">
                    filter
                  </button>
                  <button
                    type="button"
                    className="bg-gradient-to-tr from-deep-blue to-bright-red text-white h-10 rounded-[20px]"
                    // onClick={CreateTicket}
                  >
                    + New Ticket
                  </button>
                </div>
              </div>
            </div>
            {/* <div className="flex flex-col"> */}
            <table className=" bg-light-gray2 w-full items-center justify-center text-center">
              <thead>
                <tr className="h-[68px] ">
                  <th>
                    <input
                      type="checkbox"
                      className="w-[27px] h-[27px]"
                    ></input>
                  </th>
                  <th>Ticket ID</th>
                  <th>Topic</th>
                  <th>Platform</th>
                  <th>Incident Type</th>
                  <th>BI</th>
                  <th>Assign To</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {initialTickets.map((ticket) => (
                  <tr key={ticket.ticketId} className="h-[60px] ">
                    <td>
                      <input
                        type="checkbox"
                        className="w-[27px] h-[27px]"
                      ></input>
                    </td>
                    <td>{ticket.ticketId}</td>
                    <td>{ticket.topic}</td>
                    <td>{ticket.platform}</td>
                    <td>{ticket.incidentType}</td>
                    <td>{ticket.businessImpact}</td>
                    <td>{ticket.assignTo}</td>
                    <td>{ticket.status}</td>
                    <td>Action</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* <div className=" grid grid-rows-9 h-full bg-pink-200 "></div>
            </div> */}
            <footer className=" flex space-x-5 items-center  justify-end p-3 ">
              <button
                className="bg-white h-10 w-20 rounded-[20px]"
                onClick={() => setPage(page - 1)}
              >
                previous
              </button>
              <input className=" w-9"></input>
              <button
                className="bg-white  h-10 w-20 rounded-[20px]"
                onClick={() => setPage(page + 1)}
              >
                next
              </button>
              <span>Page {page} from 10</span>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
