import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Message, MenuItem } from "primeng/primeng"

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ButtonsComponent implements OnInit {

  constructor() { }


  clicks: number = 0;

  count() {
    this.clicks++;
  }

  msgs: Message[] = [];

  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Update', icon: 'fa-refresh', command: () => {
          this.update();
        }
      },
      {
        label: 'Delete', icon: 'fa-close', command: () => {
          this.delete();
        }
      },
      { label: 'Angular.io', icon: 'fa-link', url: 'http://angular.io' },
      { label: 'Theming', icon: 'fa-paint-brush', routerLink: ['/theming'] }
    ];
  }

  save() {
    this.msgs = [];
    this.msgs.push({ severity: 'info', summary: 'Success', detail: 'Data Saved' });
  }

  update() {
    this.msgs = [];
    this.msgs.push({ severity: 'info', summary: 'Success', detail: 'Data Updated' });
  }

  delete() {
    this.msgs = [];
    this.msgs.push({ severity: 'info', summary: 'Success', detail: 'Data Deleted' });
  }

}