interface AccountResponse {
  uuid: string;
  firstName: string;
  lastName: string;
  firstNameTh: string;
  lastNameTh: string;
  email: string;
  status: "verified" | "not_verify" | "disabled";
  phoneNum: string;
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
  status: "verified" | "not_verify" | "disabled";
  phoneNum: string;
}
