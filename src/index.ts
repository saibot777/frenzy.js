import { User } from "./models/User";

const user = new User({ name: 'Sladjana', age: 41 });

user.on('change', () => {

})

console.log(user);