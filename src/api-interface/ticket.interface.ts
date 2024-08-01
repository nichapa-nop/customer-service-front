interface TicketResponse {
  ticketId: string;
  topic: string;
  platform: string;
  incidentType: string;
  businessImpact: string;
  assignTo: string;
  status: string;
}

interface ITicketListResponse {
  tickets: TicketResponse[];
}
