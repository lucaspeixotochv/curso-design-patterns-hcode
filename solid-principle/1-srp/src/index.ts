import { Client } from "./Client";
import { Notify } from "./Notify";

const client = new Client("Lucas", "lucas@email.com");

const notify = new Notify(client);
notify.sendEmail();
