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
  role: RoleResponse;
}

interface ResetPasswordTokenInformation {
  isValid: boolean;
  isExpired: boolean;
  email: string;
}

interface ResetPasswordRequestBodyDTO {
  // token: string;
  password: string;
}

interface MyAccountInfo {
  firstName: string;
  lastName: string;
  role: string;
}
