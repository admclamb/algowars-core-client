import { Component } from '@angular/core';
import { ProblemService } from 'src/app/core/services/problem.service';
import { ProblemModel } from '../problem/models/problem.model';
import { AppErrorModel } from 'src/app/core/models';

@Component({
  selector: 'app-problems',
  templateUrl: './problems.component.html',
  styleUrls: ['./problems.component.css'],
})
export class ProblemsComponent {}
