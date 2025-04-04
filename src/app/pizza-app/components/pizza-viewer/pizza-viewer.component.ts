import { Component, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { FormArray } from '@angular/forms';

// animate toppings
// default animation duration: 300ms and 200ms
export const DROP_ANIMATION = trigger('drop', [
  transition(':enter', [
    style({ transform: 'translateY(-200px)', opacity: 0 }),
    animate('300ms cubic-bezier(1.000, 0.000, 0.000, 1.000)', style({ transform: 'translateY(0)', opacity: 1 }))
  ]),
  transition(':leave', [
    style({ transform: 'translateY(0)', opacity: 1 }),
    animate('200ms cubic-bezier(1.000, 0.000, 0.000, 1.000)', style({ transform: 'translateY(-200px)', opacity: 0 }))
  ])
]);

@Component({
  selector: 'pizza-viewer',
  animations: [DROP_ANIMATION],
  styleUrls: ['pizza-viewer.component.scss'],
  standalone: false,
  template: `
    <div class="pizza-viewer">
      <div
        class="pizza"
        [class.pizza--active]="activePizza === i"
        *ngFor="let pizza of pizzas?.controls; let i = index;">
        <div class="pizza__board"></div>
        <div class="pizza__base"></div>
        <div class="pizza__toppings">
          <div
            *ngFor="let topping of pizza.value.toppings; let i = index;"
            [style.zIndex]="i"
            @drop>
            <div class="pizza__topping pizza__topping--{{ topping }}"></div>
            <div class="pizza__topping pizza__topping--{{ topping }}"></div>
            <div class="pizza__topping pizza__topping--{{ topping }}"></div>
            <div class="pizza__topping pizza__topping--{{ topping }}"></div>
            <div class="pizza__topping pizza__topping--{{ topping }}"></div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class PizzaViewerComponent {
  @Input()
  pizzas!: any;

  @Input()
  activePizza!: number;
}
