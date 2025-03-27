import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PizzaAppComponent } from './containers/pizza-app/pizza-app.component';
import { PizzaFormComponent } from './components/pizza-form/pizza-form.component';
import { PizzaCreatorComponent } from './components/pizza-creator/pizza-creator.component';
import { PizzaSizeComponent } from './components/pizza-size/pizza-size.component';
import { PizzaToppingsComponent } from './components/pizza-toppings/pizza-toppings.component';
import { PizzaViewerComponent } from './components/pizza-viewer/pizza-viewer.component';
import { PizzaSummaryComponent } from './components/pizza-summary/pizza-summary.component';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { InputNumberModule } from 'primeng/inputnumber';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,FormsModule, InputGroupModule, InputGroupAddonModule, InputTextModule, SelectModule, InputNumberModule
  ],
  declarations: [
    PizzaAppComponent,
    PizzaFormComponent,
    PizzaCreatorComponent,
    PizzaSizeComponent,
    PizzaToppingsComponent,
    PizzaViewerComponent,
    PizzaSummaryComponent
  ],
  exports: [
    PizzaAppComponent
  ]
})
export class PizzaAppModule {}