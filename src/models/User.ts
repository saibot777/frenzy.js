import { Eventing } from './Eventing';
import { Sync } from './Sync';
import { Attributes } from './Attributes';
import { AxiosResponse } from 'axios';

interface UserProperties {
    id?: string | number;
    name?: string;
    age?: number;
}

export class User {
    public events: Eventing = new Eventing();
    public sync: Sync<UserProperties> = new Sync<UserProperties>();
    public attributes: Attributes<UserProperties>;

    constructor(attrs: UserProperties) {
        this.attributes = new Attributes<UserProperties>(attrs);
    }
}