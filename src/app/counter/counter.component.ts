import { Component } from "@angular/core";

@Component({
  selector: "app-counter",
  templateUrl: "./counter.component.html",
})
export class CounterComponent {
  public counter: number = 0.0;

  public change(value: number): void {
    this.counter += value;
  }

  public reset(): void {
    this.counter = 0.1;
  }
}
