import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NewAccountRoutingModule } from './new-account-routing.module';
import { NewAccountComponent } from './components/new-account/new-account.component';
import { TypeAccountPipe } from './pipes/type-account.pipe';

@NgModule({
  declarations: [NewAccountComponent, TypeAccountPipe],
  imports: [CommonModule, ReactiveFormsModule, NewAccountRoutingModule],
})
export class NewAccountModule {}
