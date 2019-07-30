import { UserProperties, User } from '../models/User';
import { View } from './View';

export class UserEdit extends View<User, UserProperties> {

    regionsMap(): { [key: string]: string } {
        return {
            userShow: '.user-show',
            userForm: '.user-form'
        };
    };

    template(): string {
        return `
            <div class="user-show">
                
            </div>
            <div class="user-form">
                <h1>User Details</h1>
                <br>
                <p>User Name: ${this.model.get('name')}</p>
                <p>User Age: ${this.model.get('age')}</p>
            </div>
        `
    }
}