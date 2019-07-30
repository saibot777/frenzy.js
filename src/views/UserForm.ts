import { User, UserProperties } from '../models/User';
import { View } from './View';

export class UserForm extends View<User, UserProperties> {

    eventsMap(): { [key: string]: () => void } {
        return {
            'click:.set-age': this.setAge,
            'click:.set-name': this.onSetName,
            'click:.save': this.save
        }
    }

    save = (): void => {
        this.model.save();
    }

    setAge = (): void => {
        this.model.setRandomAge();
    }

    onSetName = (): void => {
        const input = this.parent.querySelector('input');
        const name = input.value;
        this.model.set({ name });
    }

    template(): string {
        return `
            <div>
                <h1>User Form</h1>
                <input placeholder="${this.model.get('name')}" />
                <button class="set-name">Change Name</button>
                <button class="set-age">Set Random Age</button>
                <button class="save">Save User</button>
            </div> 
        `;
    }
}