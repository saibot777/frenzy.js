import { UserList } from './views/UserList';
import { Collection } from './models/Collection';
import { UserProperties, User } from './models/User';
import { rootUrl } from './consts/index';

const users = new Collection(
  rootUrl,
  (json: UserProperties) => {
    return User.buildUser(json);
  }
);

users.on('change', () => {
  const root = document.getElementById('root');

  if (root) {
    new UserList(root, users).render();
  }
});

users.fetch();