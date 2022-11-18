import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import {
  filter,
  map,
  debounceTime,
  distinctUntilChanged,
} from 'rxjs/operators';

@Component({
  selector: 'app-instant-search-example',
  templateUrl: './instant-search-example.component.html',
  styleUrls: ['./instant-search-example.component.css'],
})
export class InstantSearchExampleComponent implements AfterViewInit {
  @ViewChild('input') input: ElementRef;
  data: any[] = [];

  constructor() {}

  ngAfterViewInit(): void {
    fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        debounceTime(300),
        map((evt: InputEvent) => evt.target['value']),
        distinctUntilChanged()
      )
      .subscribe((val) => {
        if (val) {
          this.data.push(val);
        }
      });
  }

  clear(input: HTMLInputElement): void {
    this.data = [];
    input.value = '';
    input.focus();
  }
}
