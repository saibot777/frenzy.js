import { Model } from './Model';
import { Attributes } from './Attributes';
import { ApiSync } from './ApiSync';
import { Eventing } from './Eventing';
import { Collection } from './Collection';
import { UserProperties } from './User';
import { rootUrl } from '../consts';

export interface UserProperties {
    id?: number;
    name?: string;
    age?: number;
}

export class User extends Model<UserProperties> {
    static buildUser(attrs: UserProperties): User {
        return new User(
            new Attributes<UserProperties>(attrs),
            new Eventing(),
            new ApiSync<UserProperties>(rootUrl)
        );
    }

    static buildUserCollection(): Collection<User, UserProperties> {
        return new Collection<User, UserProperties>(rootUrl, (json: UserProperties) =>
            User.buildUser(json)
        );
    }

    setRandomAge(): void {
        const age = Math.round(Math.random() * 100);
        this.set({ age });
    }
}