interface AccountResponse {
  uuid: string;
  firstName: string;
  lastName: string;
  firstNameTh: string;
  lastNameTh: string;
  email: string;
  status: string;
  phoneNum: string;
}

interface IAccountListResponse {
  tickets: AccountResponse[];
}
