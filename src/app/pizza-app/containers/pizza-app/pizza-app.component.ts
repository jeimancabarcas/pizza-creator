import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { PizzaValidators } from '../../validators/pizza.validator';

@Component({
  selector: 'pizza-app',
  styleUrls: ['pizza-app.component.scss'],
  standalone: false,
  template: `
  <div class="p-3 w-full">
    <div>
      <pizza-form
          [parent]="form"
          [total]="total"
          [prices]="prices"
          (add)="addPizza()"
          (remove)="removePizza($event)"
          (toggle)="togglePizza($event)"
          (submit)="createOrder($event)">
        </pizza-form>
    </div>
  </div>
  `
})
export class PizzaAppComponent implements OnInit {
  private fb = inject(FormBuilder)

  activePizza = 0;
  total = '0';

  prices: any = {
    small: { base: 9.99, toppings: 0.69 },
    medium: { base: 12.99, toppings: 0.99 },
    large: { base: 16.99, toppings: 1.29 }
  };
  form;

  constructor() {
    
    this.form = this.fb.group({
      details: this.fb.group({
        name: ['', Validators.required],
        lastName: ['', Validators.required],
        whatsappPhone: ['', Validators.required],
        phone: ['', Validators.required],
        address: ['', [Validators.required, Validators.minLength(3)]],
      }),
      pizzas: this.fb.array([
        this.createPizza()
      ])
    });

  }

  ngOnInit() {
    this.calculateTotal(this.form.get('pizzas')?.value);
    this.form.get('pizzas')?.valueChanges
      .subscribe(value => this.calculateTotal(value));
  }

  createPizza() {
    return this.fb.group({
      size: ['small', Validators.required],
      toppings: [[]]
    });
  }

  addPizza() {
    const control = this.form.get('pizzas') as FormArray;
    control.push(this.createPizza());
  }

  removePizza(index: number) {
    const control = this.form.get('pizzas') as FormArray;
    control.removeAt(index);
  }

  togglePizza(index: number) {
    this.activePizza = index;
  }

  calculateTotal(value: any) {
    const price = value.reduce((prev: number, next: any) => {
      const price = this.prices[next.size];
      return prev + price.base + (price.toppings * next.toppings.length);
    }, 0);
    this.total = price.toFixed(2);
  }

  createOrder(order: FormGroup) {
    console.log(order.value);
    alert('Order placed')
  }

}
