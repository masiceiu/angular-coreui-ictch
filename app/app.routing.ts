import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

// Import Containers
import {
  FullLayoutComponent
} from './containers';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full',
  },
  {
    path: 'landing',
    component: AppComponent,
    data: {
      title: 'Home'
    },
  },
  {
    path: 'dashboard1',
    component: FullLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'components',
        loadChildren: './views/components/components.module#ComponentsModule'
      },
      // {
      //   path: 'icons',
      //   loadChildren: './views/icons/icons.module#IconsModule'
      // },
      // {
      //   path: 'widgets',
      //   loadChildren: './views/widgets/widgets.module#WidgetsModule'
      // },
      // {
      //   path: 'charts',
      //   loadChildren: './views/chartjs/chartjs.module#ChartJSModule'
      // }
    ]
  },
  // {
  //   path: 'pages',
  //   component: SimpleLayoutComponent,
  //   data: {
  //     title: 'Pages'
  //   },
  //   children: [
  //     {
  //       path: '',
  //       loadChildren: './views/pages/pages.module#PagesModule',
  //     }
  //   ]
  // }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
