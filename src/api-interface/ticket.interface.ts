interface TicketResponse {
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
