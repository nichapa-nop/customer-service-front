interface AccountResponse {
  uuid: string;
  firstName: string;
  lastName: string;
  firstNameTh: string;
  lastNameTh: string;
  email: string;
  status: "verified" | "not_verify" | "disabled" | "deleted";
  phoneNum: string;
  role: RoleResponse;
}

interface IAccountListResponse {
  tickets: AccountResponse[];
}

interface AccountRequestBodyDTO {
  firstName: string;
  lastName: string;
  firstNameTh: string;
  lastNameTh: string;
  email: string;
  status: "verified" | "not_verify" | "disabled" | "deleted";
  phoneNum: string;
  roleId: number;
}

interface ResetPasswordTokenInformation {
  isValid: boolean;
  isExpired: boolean;
  email: string;
}
