import axios, { AxiosResponse } from 'axios';

interface UserProperties {
    id?: string | number;
    name?: string;
    age?: number;
}

type Callback = () => void;

export class User {
    events: { [key: string]: Callback[] } = {};

    constructor(private data: UserProperties) { }

    get(propName: string): number | string {
        return this.data[propName];
    }

    set(update: UserProperties): void {
        Object.assign(this.data, update);
    }

    on(eventName: string, callback: Callback): void {
        const handlers = this.events[eventName] || [];
        handlers.push(callback);
        this.events[eventName] = handlers;
    }

    trigger(eventName: string): void {
        const handlers = this.events[eventName];

        if (!handlers || handlers.length === 0) {
            return;
        }

        handlers.forEach(callback => {
            callback();
        });
    }

    async fetch(): Promise<any> {
        const res: AxiosResponse = await axios.get(`http://localhost:3000/users/${this.get('id')}`);
        return this.set(res.data);
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