import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  counter = 0;

  increasedBy(value: number): void {
    this.counter += value ;
  }

  reset(): void {
    this.counter = 0;
  }
}
