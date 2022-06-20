import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewAccountRoutingModule } from './new-account-routing.module';
import { NewAccountComponent } from './components/new-account/new-account.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [NewAccountComponent],
  imports: [CommonModule, ReactiveFormsModule, NewAccountRoutingModule],
})
export class NewAccountModule {}
