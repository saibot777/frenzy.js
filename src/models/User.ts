import axios, { AxiosResponse } from 'axios';
import { Eventing } from './Eventing';

interface UserProperties {
    id?: string | number;
    name?: string;
    age?: number;
}

export class User {
    public events: Eventing = new Eventing();

    constructor(private data: UserProperties) { }

    get(propName: string): number | string {
        return this.data[propName];
    }

    set(update: UserProperties): void {
        Object.assign(this.data, update);
    }

    fetch(): void {
        axios.get(`http://localhost:3000/users/${this.get('id')}`)
            .then((response: AxiosResponse): void => {
                this.set(response.data);
            }
        );
    }

    save(): void {
        const id = this.get('id')

        if (id) {
            axios.put(`http://localhost:3000/users/${id}`);
        } else {
            axios.post('http://localhost:3000/users', this.data);
        }
    }
}