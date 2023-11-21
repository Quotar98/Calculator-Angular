import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  expression: string = '';
  result: string = '';

  appendToExpression(value: string) {
    this.expression += value;
  }

  calculateResult() {
    try {
      this.result = eval(this.expression).toString();
    } catch (error) {
      this.result = 'Error';
    }
  }

  clear() {
    this.expression = '';
    this.result = '';
  }
}