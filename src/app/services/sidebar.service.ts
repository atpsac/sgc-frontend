import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: object [] = [
    {
      tittle : 'Dashboard',
      icon: 'mdi mdi-gauge',
      subMenu: [
        {
          tittle: 'Principal',
          url: '/'
        },
        {
          tittle: 'Secundaria',
          url: 'account-settings'
        }
      ]
    }
  ];

  constructor() { }
}
