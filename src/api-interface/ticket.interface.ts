interface TicketResponse {
  cusFirstName: string;
  cusLastName: string;
  cusPhoneNum: string;
  cusEmail: string;
  cusCompanyName: string;
  cusCompanyType: "hr" | "cdd" | "other";
  ticketId: string;
  topic: string;
  description: string;
  platform: "hr" | "cdd";
  incidentType: "issue" | "consult" | "other";
  businessImpact: "s1" | "s2" | "s3" | "s4" | "no";
  assignTo: AccountResponse;
  status: string;
  feedbackCh:
    | "help_crunch"
    | "phone"
    | "email"
    | "line"
    | "ticket"
    | "base_employee";
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
  cusCompanyType: "hr" | "cdd" | "other";
  topic: string;
  description: string;
  platform: "hr" | "cdd";
  incidentType: "issue" | "consult" | "other";
  businessImpact: "s1" | "s2" | "s3" | "s4" | "no";
  assignTo?: AccountResponse;
  status: string;
  feedbackCh:
    | "help_crunch"
    | "phone"
    | "email"
    | "line"
    | "ticket"
    | "base_employee";
  ticketLink: string;
}

interface CloseTicketRequestBodyDTO {
  email: string;
  solution: string;
}
