import { Eventing } from './Eventing';
import { Sync } from './Sync';

interface UserProperties {
    id?: string | number;
    name?: string;
    age?: number;
}

export class User {
    public events: Eventing = new Eventing();
    public sync: Sync<UserProperties> = new Sync<UserProperties>();
}