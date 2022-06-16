import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MyAccountComponent } from './components/my-account/my-account.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/account/my-accounts',
  },
  {
    path: 'account',
    component: HomeComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'my-accounts',
      },
      {
        path: 'my-accounts',
        component: MyAccountComponent,
      },
    ],
  },
  {
    path: '**',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
