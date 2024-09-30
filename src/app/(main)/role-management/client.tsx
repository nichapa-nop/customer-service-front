"use client";
import { getRoleList } from "@/actions/role.action";
import CreateRoleModal from "@/components/role/create-role/modal";
import DeleteRoleSuccess from "@/components/role/delete-role-success/modal";
import RoleRow from "@/components/rolerow/rolerow";

import React, { useEffect, useRef, useState } from "react";

export default function RoleManagementClient({
  roles: initialRoles,
  groupMenus = [],
}: {
  roles: RoleResponse[];
  groupMenus?: GroupMenuResponse[];
}) {
  const [page, setPage] = useState<number>(1);
  const [pageCount, setPageCount] = useState<number>();
  const [itemCount, setItemCount] = useState<number>(0);

  const [roles, setRoles] = useState<RoleResponse[]>(initialRoles);
  const [isCreateRoleModalOpen, setIsCreateRoleModalOpen] =
    useState<boolean>(false);
  const [searchKeyword, setSearchKeyword] = useState<string>();
  const timeoutRef = useRef<NodeJS.Timeout>();
  const [isPageChanged, setIsPageChanged] = useState<boolean>(false);
  const [isDeleteRoleSuccessModalOpen, setIsDeleteRoleSuccessModalOpen] =
    useState<boolean>(false);
  const [latestDeleteRole, setLatestDeleteRole] = useState<RoleResponse>();

  async function fetchLastestRoles(page: number = 1, keyword?: string) {
    const response = await getRoleList({ page, keyword });
    setRoles(response.data);
    setPageCount(
      Math.ceil(
        response.pagination.itemsCount / response.pagination.itemsPerPage
      )
    );
    setItemCount(response.pagination.itemsCount); // Set the item count here
  }

  useEffect(() => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      fetchLastestRoles(1, searchKeyword);
    }, 1000);
  }, [searchKeyword]);

  useEffect(() => {
    if (isPageChanged) {
      fetchLastestRoles(page);
    }
  }, [page]);

  useEffect(() => {
    setRoles(initialRoles);
  }, [initialRoles]);

  return (
    <div className="bg-white h-full w-full flex">
      <div className="w-full">
        <div className="flex w-full h-full">
          <div className=" w-full flex flex-col justify-between">
            <div className=" pt-6 px-6 p-2">
              <div className=" flex flex-col h-full">
                <div className="grid grid-cols-7 space-x-4 h-[44px]  justify-center items-center mb-2 text-[14px] ">
                  <label className="flex items-center col-span-5 h-full rounded-[20px] px-4 space-x-3 shadow-light2">
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
                    <span className="bg-gradient-to-tr from-deep-blue via-fade-purple to-bright-red inline-block text-transparent bg-clip-text">
                      Filter
                    </span>
                  </button>
                  <button
                    type="button"
                    className="flex flex-row items-center justify-center space-x-2 bg-gradient-to-tr from-deep-blue to-bright-red text-white h-full bg-white rounded-[20px] shadow-light2"
                    onClick={() => setIsCreateRoleModalOpen(true)}
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
                    <span>New Role</span>
                  </button>
                </div>
              </div>
            </div>
            {/* <div className="flex flex-col"> */}
            <div className="overflow-x-auto text-[14px]">
              <table className="bg-white w-full table-fixed items-center justify-center text-center">
                <colgroup>
                  <col className="w-[20%]" />
                  <col className="w-[60%]" />
                  <col className="w-[20%]" />
                </colgroup>
                <thead>
                  <tr className="h-[68px] ">
                    <th>Role</th>
                    <th>Group Menu</th>
                    <th className="w-[300px]">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {roles.map((role) => (
                    <RoleRow
                      key={role.id}
                      role={role}
                      initialGroupMenus={groupMenus}
                      setIsDeleteSuccessModalOpen={
                        setIsDeleteRoleSuccessModalOpen
                      }
                      setLatestDeleteRole={setLatestDeleteRole}
                    />
                  ))}
                </tbody>
              </table>
            </div>
            {/* <div className=" grid grid-rows-9 h-full bg-pink-200 "></div>
            </div> */}
            <footer className="flex justify-between items-center p-6 mt-auto">
              <div className="mx-4 text-dark-gray">{itemCount} Items</div>
              <div className=" flex space-x-5 items-center">
                <button
                  className="flex bg-light-gray1 h-[34px] w-[34px] rounded-[20px]  items-center justify-center"
                  // onClick={() => setPage(page - 1)}
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
                <input
                  className="outline outline-light-gray1 w-20 h-11 rounded-[15px] text-center"
                  placeholder={`${page}`}
                ></input>
                <button
                  className="flex bg-light-gray1 h-[34px] w-[34px] rounded-[20px]  items-center justify-center"
                  // onClick={() => setPage(page + 1)}
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
          <CreateRoleModal
            isOpen={isCreateRoleModalOpen}
            setIsOpen={setIsCreateRoleModalOpen}
            initialGroupMenus={groupMenus}
          />
          {isDeleteRoleSuccessModalOpen && latestDeleteRole && (
            <DeleteRoleSuccess
              isOpen={isDeleteRoleSuccessModalOpen}
              setIsOpen={setIsDeleteRoleSuccessModalOpen}
              roleName={latestDeleteRole.roleName}
            />
          )}
        </div>
      </div>
    </div>
  );
}
