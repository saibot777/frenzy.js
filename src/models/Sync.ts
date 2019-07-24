import axios, { AxiosResponse, AxiosPromise } from 'axios';
import { UserProperties } from './User';
import { rootUrl } from '../consts';

export class Sync {
    fetch(id: number): AxiosPromise {
        return axios.get(`${rootUrl}/${id}`);      
    }

    save(data: UserProperties): void {
        const { id } = data;

        if (id) {
            axios.put(`/${id}`);
        } else {
            axios.post(rootUrl, data);
        }
    }
}