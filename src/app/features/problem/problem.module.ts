import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProblemComponent } from './problem.component';
import { SharedModule } from 'src/app/shared';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ProblemComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: ProblemComponent }]),
  ],
})
export class ProblemModule {}
