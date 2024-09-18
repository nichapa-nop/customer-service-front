interface GroupMenuResponse {
  id: number;
  name: string;
}

interface RoleResponse {
  id: number;
  roleName: string;
  priority: number;
  groupMenu: GroupMenuResponse;
}
