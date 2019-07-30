import { Model } from './Model';
import { Attributes } from './Attributes';
import { Eventing } from './Eventing';
import { rootUrl } from '../consts/index';
import { Sync } from './Sync';
import { Collection } from './Collection';

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
            new Sync<UserProperties>(rootUrl)
        )
    }

    static buildUserCollection(): Collection<User, UserProperties> {
        return new Collection<User, UserProperties>(
            rootUrl, (json: UserProperties) => User.buildUser(json)
        );
    }

    public setRandomAge(): void {
        const age = Math.round(Math.random() * 100);
        this.set({ age })
    }
}