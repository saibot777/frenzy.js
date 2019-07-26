import { Model } from './Model';
import { Attributes } from './Attributes';
import { Eventing } from './Eventing';
import { rootUrl } from '../consts/index';
import { Sync } from './Sync';

interface UserProperties {
    id?: number;
    name?: string;
    age?: number;
}

export class User extends Model<UserProperties> {
    static buildUser(attrs: UserProperties): User {
        return new User(
            new Attributes<UserProperties>(attrs),
            new Eventing(),
            new Sync<UserProperties>(rootUrl)
        )
    }
}