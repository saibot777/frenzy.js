import { Eventing } from './Eventing';
import { Sync } from './Sync';
import { Attributes } from './Attributes';

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

    get on() {
        return this.events.on;
    }

    get trigger() {
        return this.events.trigger;
    }

    get get() {
        return this.attributes.get;
    }

    set(update: UserProperties): void {
        this.attributes.set(update);
        this.events.trigger('change');
    }
}