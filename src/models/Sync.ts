import axios, { AxiosPromise } from 'axios';
import { rootUrl } from '../consts';

interface HasId {
    id: number;
}

export class Sync<T extends HasId> {
    fetch(id: number): AxiosPromise {
        return axios.get(`${rootUrl}/${id}`);      
    }

    save(data: T): void {
        const { id } = data;

        if (id) {
            axios.put(`/${id}`);
        } else {
            axios.post(rootUrl, data);
        }
    }
}