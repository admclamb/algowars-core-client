import { AccountModel } from './account.model';
import { CategoryModel } from './category.model';

export interface ProblemModel {
  id: number;
  title: string;
  question: string;
  likes: number;
  dislikes: number;
  createdAt: Date;
  updatedAt: Date;
  createdBy: {
    username: string;
    id: number;
  };
  problemCategories: CategoryModel[];
  infos: {
    id: number;
    baseCode: string;
    language: {
      id: number;
      name: string;
    };
  }[];
}
