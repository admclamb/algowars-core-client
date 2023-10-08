import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateProblemComponent } from './create-problem.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@app/shared';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreateProblemComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: CreateProblemComponent,
      },
    ]),
  ],
})
export class CreateProblemModule {}
