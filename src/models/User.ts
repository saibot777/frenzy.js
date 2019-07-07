interface UserProperties {
    name?: string;
    age?: number;
}

type Callback = () => {};

export class User {
    events: { [key: string]: Callback[] } = {};

    constructor(private data: UserProperties) {}

    get(propName: string): number | string {
        return this.data[propName];
    }

    set(update: UserProperties): void {
        Object.assign(this.data, update);
    }

    on(eventName: string, callback: Callback) {
        this.events['aldsdsdsdsffsf'] = []
    }
}