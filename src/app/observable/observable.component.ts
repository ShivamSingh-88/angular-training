import { Component, OnInit } from '@angular/core';
import { MyObservable } from '../observable/observable';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css'],
})
export class ObservableComponent implements OnInit {
  myObservable = new MyObservable();
  data: any[] = [];

  subscription;

  constructor() {}

  ngOnInit() {
    this.subscribe();
  }

  subscribe(): void {
    this.subscription = this.myObservable.subscribe((data) => {
      this.data.push(data);
    });
  }

  unsubscribe(): void {
    this.subscription.unsubscribe();
    this.subscription = null;
  }

  add(input: HTMLInputElement): void {
    if (input.value) {
      this.myObservable.next(input.value);
      input.value = '';
    }
    input.focus();
  }
}
