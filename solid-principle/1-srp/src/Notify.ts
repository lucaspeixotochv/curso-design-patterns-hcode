import { Client } from "./Client";

export class Notify {
  constructor(private client: Client) {}

  sendEmail(): void {
    console.log(
      `Enviando email para o cliente ${this.client.name} no email ${this.client.email}`
    );
  }
}
