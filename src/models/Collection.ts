import { User, UserProperties } from "./User";
import { Eventing } from './Eventing';
import axios from 'axios';
import { AxiosResponse } from 'axios';

export class Collection {
    models: User[] = [];
    events: Eventing = new Eventing();

    constructor(public rootUrl: string) {}

    get on() {
        return this.events.on;
    }

    get trigger() {
        return this.events.trigger;
    }

    fetch(): void {
        axios.get(this.rootUrl)
            .then((response: AxiosResponse) => {
                response.data.forEach((value: UserProperties) => {
                    const user = User.buildUser(value);
                    this.models.push(user);
            })
        }).catch(err => { 
            throw new Error(err) 
        });
    }
}