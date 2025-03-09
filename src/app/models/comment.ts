import { User } from './user';
import { Product } from './product';

export interface Comment {
  id: number;
  contenu: string;
  createdAt: string;
  user: User;
  product: Product;
}
