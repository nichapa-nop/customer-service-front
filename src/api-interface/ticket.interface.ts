interface TicketResponse {
  ticketId: string;
  topic: string;
  platform: string;
  incidentType: string;
  businessImpact: string;
  assignTo: IAccountResponse;
  status: string;
}

interface ITicketListResponse {
  tickets: TicketResponse[];
}
