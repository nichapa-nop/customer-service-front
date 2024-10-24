import { Dispatch, SetStateAction, useState } from "react";
import RoleDetail from "../role/role-detail/modal";
import EditRoleModal from "../role/edit-role/modal";
import DeleteRoleModal from "../role/delete-role/modal";
import EditRoleSuccess from "../role/edit-role-success/modal";

interface RoleRowProps {
  role: RoleResponse;
  initialGroupMenus: GroupMenuResponse[];
  setIsDeleteSuccessModalOpen: Dispatch<SetStateAction<boolean>>;
  setLatestDeleteRole: Dispatch<SetStateAction<RoleResponse | undefined>>;
  setIsEditSuccessModalOpen: Dispatch<SetStateAction<boolean>>;
}

const RoleRow: React.FC<RoleRowProps> = ({
  role,
  initialGroupMenus,
  setLatestDeleteRole,
  setIsDeleteSuccessModalOpen,
  setIsEditSuccessModalOpen,
}) => {
  const [isRoleDetailModalOpen, setIsRoleDetailModalOpen] =
    useState<boolean>(false);
  const [isEditRoleModalOpen, setIsEditRoleModalOpen] =
    useState<boolean>(false);
  const [isDeleteRoleModalOpen, setIsDeleteRoleModalOpen] =
    useState<boolean>(false);
  return (
    <tr key={role.id} className="h-[68px] hover:bg-light-orange">
      <td
        className="w-[20%] text-left pl-16 capitalize"
        onClick={() => {
          setIsRoleDetailModalOpen(true);
        }}
      >
        {["ceo"].includes(role.roleName)
          ? role.roleName.toUpperCase()
          : role.roleName}
      </td>
      <td
        className="w-[60%] text-left pl-20"
        onClick={() => {
          setIsRoleDetailModalOpen(true);
        }}
      >
        <span className="capitalize">
          {`${role.groupMenu.name}: ${role.groupMenu.menus
            .map((menu) => menu.menuName)
            .join(", ")}`}
        </span>
      </td>
      <td className="w-[20%] space-x-3">
        <button
          onClick={() => {
            setIsEditRoleModalOpen(true);
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

        <button
          onClick={() => {
            setIsDeleteRoleModalOpen(true);
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
        {isRoleDetailModalOpen && (
          <RoleDetail
            initialRole={role}
            isOpen={isRoleDetailModalOpen}
            setIsOpen={setIsRoleDetailModalOpen}
          />
        )}
        {isEditRoleModalOpen && (
          <EditRoleModal
            initialRole={role}
            isOpen={isEditRoleModalOpen}
            setIsOpen={setIsEditRoleModalOpen}
            initialGroupMenus={initialGroupMenus}
            setIsEditRoleSuccessModalOpen={setIsEditSuccessModalOpen}
          />
        )}
        {isDeleteRoleModalOpen && (
          <DeleteRoleModal
            initialRole={role}
            isOpen={isDeleteRoleModalOpen}
            setIsOpen={setIsDeleteRoleModalOpen}
            setIsDeleteRoleSuccessModalOpen={setIsDeleteSuccessModalOpen}
            setLatestDeleteRole={setLatestDeleteRole}
          />
        )}
      </td>
    </tr>
  );
};

export default RoleRow;
