interface MenuResponse {
  id: number;
  menuName: string;
}

interface GroupMenuResponse {
  id: number;
  name: string;
  menus: MenuResponse[];
}

interface GroupMenuListResponseBodyDTO {
  groupMenus: GroupMenuResponse[];
}

interface RoleResponse {
  id: number;
  roleName: string;
  groupMenu: GroupMenuResponse;
}

interface RoleRequestBody {
  roleName: string;
  groupMenuId: number;
}
