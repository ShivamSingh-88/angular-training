import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InstantSearchExampleComponent } from './instant-search-example/instant-search-example.component';
import { ObservableComponent } from './observable/observable.component';
import { OperatorsComponent } from './operators/operators.component';
import { RxjsPracticeComponent } from './rxjs-practice/rxjs-practice.component';

@NgModule({
  imports: [CommonModule, BrowserModule, AppRoutingModule],
  declarations: [AppComponent, ObservableComponent, RxjsPracticeComponent, OperatorsComponent, InstantSearchExampleComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
