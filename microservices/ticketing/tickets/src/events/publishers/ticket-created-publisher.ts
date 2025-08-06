import { Publisher, Subjects, TicketCreatedEvent } from "@microserviceticketsproj/common";


export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
    subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
