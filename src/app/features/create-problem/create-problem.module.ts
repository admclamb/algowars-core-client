import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateProblemComponent } from './create-problem.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@app/shared';

@NgModule({
  declarations: [CreateProblemComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: CreateProblemComponent,
      },
    ]),
  ],
})
export class CreateProblemModule {}
