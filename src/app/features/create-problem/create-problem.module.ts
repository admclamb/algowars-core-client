import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateProblemComponent } from './create-problem.component';
import { SharedModule } from 'src/app/shared';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CreateProblemComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: CreateProblemComponent }]),
  ],
})
export class CreateProblemModule {}
