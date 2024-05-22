import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      titulo: 'Dashboard',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Chart', url: 'chart' },
        { titulo: 'Main', url: '/' },
        { titulo: 'Progress', url: 'progress' },
        { titulo: 'Promises', url: 'promises' },
        { titulo: 'Rxjs', url: 'rxjs' },
      ]
    },
  ];

  constructor() { }
}
