import { User, UserProperties } from '../models/User';
import { View } from './View';

export class UserForm extends View<User, UserProperties> {

    eventsMap(): { [key: string]: () => void } {
        return {
            'click:.set-age': this.setAge,
            'click:.set-name': this.onSetName
        }
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
                <div>User name: ${this.model.get('name')}</div> 
                <div>User age: ${this.model.get('age')}</div> 
                <input />
                <button class="set-name">Change Name</button>
                <button class="set-age">Set Random Age</button>
            </div> 
        `;
    }
}