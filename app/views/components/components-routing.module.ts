import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ButtonsComponent } from './buttons/buttons.component';
import { InputsComponent } from './inputs/inputs.component';
import { DataComponent } from './data/data.component';

// import { CardsComponent } from './cards.component';
// import { FormsComponent } from './forms.component';
// import { ModalsComponent } from './modals.component';
// import { SocialButtonsComponent } from './social-buttons.component';
// import { SwitchesComponent } from './switches.component';
// import { TablesComponent } from './tables.component';
// import { TabsComponent } from './tabs.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Components'
    },
    children: [
      {
        path: 'buttons',
        component: ButtonsComponent,
        data: {
          title: 'Buttons'
        }
      },
      {
        path: 'inputs',
        component: InputsComponent,
        data: {
          title: 'Inputs'
        }
      },
      {
        path: 'data',
        component: DataComponent,
        data: {
          title: 'Data'
        }
      },
      // {
      //   path: 'forms',
      //   component: FormsComponent,
      //   data: {
      //     title: 'Forms'
      //   }
      // },
      // {
      //   path: 'modals',
      //   component: ModalsComponent,
      //   data: {
      //     title: 'Modals'
      //   }
      // },
      // {
      //   path: 'social-buttons',
      //   component: SocialButtonsComponent,
      //   data: {
      //     title: 'Social buttons'
      //   }
      // },
      // {
      //   path: 'switches',
      //   component: SwitchesComponent,
      //   data: {
      //     title: 'Switches'
      //   }
      // },
      // {
      //   path: 'tables',
      //   component: TablesComponent,
      //   data: {
      //     title: 'Tables'
      //   }
      // },
      // {
      //   path: 'tabs',
      //   component: TabsComponent,
      //   data: {
      //     title: 'Tabs'
      //   }
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule {}
