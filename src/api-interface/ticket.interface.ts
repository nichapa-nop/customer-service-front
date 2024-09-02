interface TicketResponse {
  cusFirstName: string;
  cusLastName: string;
  cusPhoneNum: string;
  cusEmail: string;
  cusCompanyName: string;
  cusCompanyType: string;
  ticketId: string;
  topic: string;
  description: string;
  platform: string;
  incidentType: string;
  businessImpact: string;
  assignTo: AccountResponse;
  status: string;
  feedbackCh: string;
  ticketLink: string;
}

interface ITicketListResponse {
  tickets: TicketResponse[];
}

interface TicketRequestBodyDTO {
  cusFirstName: string;
  cusLastName: string;
  cusPhoneNum: string;
  cusEmail: string;
  cusCompanyName: string;
  cusCompanyType: string;
  topic: string;
  description: string;
  platform: string;
  incidentType: string;
  businessImpact: string;
  assignTo?: AccountResponse;
  status: string;
  feedbackCh: string;
  ticketLink: string;
}

interface CloseTicketRequestBodyDTO {
  email: string;
  solution: string;
}

// interface EditTicketRequestBodyDTO {
//   cusFirstName: string;
//   cusLastName: string;
//   cusPhoneNum: string;
//   cusEmail: string;
//   cusCompanyName: string;
//   cusCompanyType: string;
//   topic: string;
//   description: string;
//   platform: string;
//   incidentType: string;
//   businessImpact: string;
//   assignTo?: AccountResponse;
//   status: string;
//   feedbackCh: string;
//   ticketLink: string;
// }
