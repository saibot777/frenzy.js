import { CollectionView } from './CollectionView';
import { User, UserProperties } from '../models/User';
import { UserShow } from './UserShow';

export class UserList extends CollectionView<User, UserProperties> {
  renderItem(model: User, itemParent: Element): void {
    new UserShow(itemParent, model).render();
  }
}