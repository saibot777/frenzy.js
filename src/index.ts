import { User } from "./models/User";

const user = new User({ id: 1 });

user.set({ name: 'NEW NAME', age: 9999 })

user.save();

setTimeout(() => {
    console.log(user)
}, 4000);