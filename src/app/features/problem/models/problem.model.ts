import { AccountModel } from '../../account/models/account.model';

export interface ProblemModel {
  id: number;
  createdBy: AccountModel;
  title: string;
  question: string;
  likes: number;
  dislikes: number;
  createdAt: Date;
  updatedAt: Date;
}
