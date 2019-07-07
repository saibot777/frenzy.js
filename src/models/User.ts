interface UserProperties {
    name: string;
    age: number;
}

export class User {
    constructor(private data: UserProperties) {}

    get(propName: string): number | string {
        return this.data[propName]
    }
}