import { PaginationModel } from 'src/app/core/models/pagination-model';
import { ProblemModel } from '../../problem/models/problem.model';

export interface ProblemsModel extends PaginationModel<ProblemModel> {}
