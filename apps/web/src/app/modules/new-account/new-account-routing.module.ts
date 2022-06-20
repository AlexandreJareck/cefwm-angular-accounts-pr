import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewAccountComponent } from './components/new-account/new-account.component';

const routes: Routes = [
  {
    path: '',
    component: NewAccountComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewAccountRoutingModule {}
