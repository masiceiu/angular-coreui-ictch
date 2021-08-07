import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line
  selector: 'body',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  ngOnInit() {
    //temp fix because stackblitz doesn't allow access to index.html
    document.body.className = 'app header-fixed sidebar-fixed aside-menu-fixed aside-menu-hidden';
  }
}
