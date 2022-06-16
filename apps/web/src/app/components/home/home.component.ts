/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'cefwm-angular-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public items: MenuItem[] = [
    {
      label: 'My Accounts',
      icon: 'pi pi-home',
      routerLink: ['/account/my-accounts'],
    },
  ];

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {}
}
