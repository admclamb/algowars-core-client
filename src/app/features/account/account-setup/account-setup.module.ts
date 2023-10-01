import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared';
import { RouterModule } from '@angular/router';
import { AccountSetupComponent } from './account-setup.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AccountSetupComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: AccountSetupComponent }]),
  ],
})
export class AccountSetupModule {}
