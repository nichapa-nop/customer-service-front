"use client";
import { getAccountList } from "@/actions/account.action";
import CreateAccountModal from "@/components/account/create-account/modal";
import DeleteAccountSuccess from "@/components/account/delete-account-success/modal";
import EditAccountSuccess from "@/components/account/edit-account-success/modal";
import AccountRow from "@/components/accountrow/accountrow";
import classNames from "classnames";

import React, { useEffect, useRef, useState } from "react";

export interface AccountFilterers {
  roleName?: string;
  status?: AccountStatus;
}

export default function AccountManagementClient({
  accounts: initialAccounts,
  roles: initialRoles,
}: {
  accounts: AccountResponse[];
  roles: RoleResponse[];
}) {
  const [page, setPage] = useState<number>(1);
  const [pageCount, setPageCount] = useState<number>(1);
  const [itemCount, setItemCount] = useState<number>(0);

  const [accounts, setAccounts] = useState<AccountResponse[]>(initialAccounts);
  const [isCreateAccountModalOpen, setIsCreateAccountModalOpen] =
    useState<boolean>(false);
  const [searchKeyword, setSearchKeyword] = useState<string>();
  const timeoutRef = useRef<NodeJS.Timeout>();
  const [isPageChanged, setIsPageChanged] = useState<boolean>(false);
  const [isDeleteAccountSuccessModalOpen, setIsDeleteAccountSuccessModalOpen] =
    useState<boolean>(false);
  const [isEditAccountSuccessModalOpen, setIsEditAccountSuccessModalOpen] =
    useState<boolean>(false);
  const [filterers, setFilterers] = useState<AccountFilterers>({});

  async function fetchLastestAccounts(page: number = 1, keyword?: string) {
    const response = await getAccountList({
      page,
      keyword,
      filters: filterers,
    });
    setAccounts(response.data);
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
      fetchLastestAccounts(1, searchKeyword);
    }, 1000);
  }, [searchKeyword]);

  useEffect(() => {
    if (isPageChanged) {
      fetchLastestAccounts(page);
    }
  }, [page]);

  useEffect(() => {
    fetchLastestAccounts(1, searchKeyword);
    setPage(1);
  }, [filterers]);

  useEffect(() => {
    setAccounts(initialAccounts);
  }, [initialAccounts]);

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
                  <div
                    className="dropdown dropdown-bottom flex flex-row items-center justify-center px-10 bg-white h-full rounded-[20px] shadow-light2 space-x-2"
                    tabIndex={0}
                    role="button"
                  >
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
                          <stop
                            offset="50%"
                            style={{ stopColor: "#82303d", stopOpacity: 1 }}
                          />
                          <stop
                            offset="100%"
                            style={{ stopColor: "#ec4723", stopOpacity: 1 }}
                          />
                        </linearGradient>
                      </defs>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
                        stroke="url(#gradient1)"
                      />
                    </svg>
                    <div className="bg-gradient-to-tr from-deep-blue to-bright-red inline-block text-transparent bg-clip-text">
                      Filter
                    </div>
                    <ul
                      tabIndex={0}
                      className="menu dropdown-content bg-base-100 rounded-box z-[1] mt-4 w-96 p-2 drop-shadow-lg grid grid-cols-2 gap-2"
                    >
                      <li className="menu-title col-span-2">
                        <span className="text-bright-red">Role</span>
                      </li>
                      {initialRoles.map((role) => (
                        <li
                          className={classNames("capitalize", {
                            "text-bright-red border-[1px] border-bright-red rounded-lg":
                              filterers?.roleName === role.roleName,
                          })}
                          onClick={(e) => {
                            if (filterers?.roleName === role.roleName) {
                              setFilterers((prev) => ({
                                ...prev,
                                roleName: undefined,
                              }));
                            } else {
                              setFilterers((prev) => ({
                                ...prev,
                                roleName: role.roleName,
                              }));
                            }
                          }}
                          key={role.roleName}
                        >
                          <a>
                            {role.roleName === "ceo" ? "CEO" : role.roleName}
                          </a>
                        </li>
                      ))}

                      <li className="menu-title col-span-2">
                        <span className="text-bright-red">Status</span>
                      </li>
                      <li
                        className={classNames({
                          "text-bright-red border-[1px] border-bright-red rounded-lg":
                            filterers?.status === "verified",
                        })}
                        onClick={(e) => {
                          if (filterers?.status === "verified") {
                            setFilterers((prev) => ({
                              ...prev,
                              status: undefined,
                            }));
                          } else {
                            setFilterers((prev) => ({
                              ...prev,
                              status: "verified",
                            }));
                          }
                        }}
                      >
                        <a>Verify</a>
                      </li>
                      <li
                        className={classNames({
                          "text-bright-red border-[1px] border-bright-red rounded-lg":
                            filterers?.status === "not_verify",
                        })}
                        onClick={(e) => {
                          if (filterers?.status === "not_verify") {
                            setFilterers((prev) => ({
                              ...prev,
                              status: undefined,
                            }));
                          } else {
                            setFilterers((prev) => ({
                              ...prev,
                              status: "not_verify",
                            }));
                          }
                        }}
                      >
                        <a>Not Verify</a>
                      </li>
                      <li
                        className={classNames({
                          "text-bright-red border-[1px] border-bright-red rounded-lg":
                            filterers?.status === "disabled",
                        })}
                        onClick={(e) => {
                          if (filterers?.status === "disabled") {
                            setFilterers((prev) => ({
                              ...prev,
                              status: undefined,
                            }));
                          } else {
                            setFilterers((prev) => ({
                              ...prev,
                              status: "disabled",
                            }));
                          }
                        }}
                      >
                        <a>Disable</a>
                      </li>
                      <li
                        className={classNames({
                          "text-bright-red border-[1px] border-bright-red rounded-lg":
                            filterers?.status === "deleted",
                        })}
                        onClick={(e) => {
                          if (filterers?.status === "deleted") {
                            setFilterers((prev) => ({
                              ...prev,
                              status: undefined,
                            }));
                          } else {
                            setFilterers((prev) => ({
                              ...prev,
                              status: "deleted",
                            }));
                          }
                        }}
                      >
                        <a>Deleted</a>
                      </li>
                    </ul>
                  </div>

                  <button
                    type="button"
                    className="flex flex-row items-center justify-center space-x-2 bg-gradient-to-tr from-deep-blue to-bright-red text-white h-full bg-white rounded-[20px] shadow-light2"
                    onClick={() => setIsCreateAccountModalOpen(true)}
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
                    <span>New Account</span>
                  </button>
                </div>
              </div>
            </div>
            {/* <div className="flex flex-col"> */}
            <div className="overflow-x-auto text-[14px]">
              <table className="bg-white w-full table-fixed items-center justify-center text-center">
                <colgroup>
                  <col className="w-[25%]" />
                  <col className="w-[25%]" />
                  <col className="w-[20%]" />
                  <col className="w-[15%]" />
                  <col className="w-[15%]" />
                </colgroup>
                <thead>
                  <tr className="h-[68px] ">
                    <th>Account</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {accounts.map((account) => (
                    <AccountRow
                      key={account.uuid}
                      initialRoles={initialRoles}
                      account={account}
                      setIsDeleteAccountSuccessModalOpen={
                        setIsDeleteAccountSuccessModalOpen
                      }
                      setIsEditAccountSuccessModalOpen={
                        setIsEditAccountSuccessModalOpen
                      }
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
                {/* {page <= 0 && ( */}
                <button
                  className="flex bg-light-gray1 h-[34px] w-[34px] rounded-[20px]  items-center justify-center"
                  onClick={() => {
                    setIsPageChanged(true);
                    setPage(page - 1);
                  }}
                  disabled={page == 1} // disabled ปุ่มเมื่อ page มากกว่าหรือเท่ากับ pageCount
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
                  disabled
                  // onChange={setPage()}
                ></input>
                <button
                  className="flex bg-light-gray1 h-[34px] w-[34px] rounded-[20px]  items-center justify-center"
                  onClick={() => {
                    setIsPageChanged(true);
                    setPage(page + 1);
                  }}
                  disabled={page >= pageCount} // disabled ปุ่มเมื่อ page มากกว่าหรือเท่ากับ pageCount
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
                <span>
                  Page {page} from {pageCount}
                </span>
              </div>
            </footer>
          </div>
          <CreateAccountModal
            isOpen={isCreateAccountModalOpen}
            setIsOpen={setIsCreateAccountModalOpen}
            initialRoles={initialRoles}
          />
          {isDeleteAccountSuccessModalOpen && (
            <DeleteAccountSuccess
              isOpen={isDeleteAccountSuccessModalOpen}
              setIsOpen={setIsDeleteAccountSuccessModalOpen}
            />
          )}
          {isEditAccountSuccessModalOpen && (
            <EditAccountSuccess
              isOpen={isEditAccountSuccessModalOpen}
              setIsOpen={setIsEditAccountSuccessModalOpen}
            />
          )}
        </div>
      </div>
    </div>
  );
}
