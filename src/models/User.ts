import axios, { AxiosResponse } from 'axios';

interface UserProperties {
    id?: string | number;
    name?: string;
    age?: number;
}

export class User {

    constructor(private data: UserProperties) { }

    get(propName: string): number | string {
        return this.data[propName];
    }

    set(update: UserProperties): void {
        Object.assign(this.data, update);
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