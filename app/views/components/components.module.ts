import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from './buttons/buttons.component';

// NGPrime
import {ButtonModule, SplitButtonModule, GrowlModule, CheckboxModule, RadioButtonModule, InputTextModule, CalendarModule, DataTableModule,SharedModule} from 'primeng/primeng';

// Components Routing
import { ComponentsRoutingModule } from './components-routing.module';
import { InputsComponent } from './inputs/inputs.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DataComponent } from './data/data.component';

@NgModule({
  imports: [
    CommonModule ,
    FormsModule,
    ComponentsRoutingModule,
    InputTextModule,
    ButtonModule, 
    SplitButtonModule, 
    GrowlModule, 
    CheckboxModule,
    RadioButtonModule, 
    CalendarModule,
    DataTableModule,SharedModule
  ],
  declarations: [ButtonsComponent, InputsComponent, CalendarComponent, DataComponent]
})
export class ComponentsModule { }