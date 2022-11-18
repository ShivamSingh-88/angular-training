import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstantSearchExampleComponent } from './instant-search-example/instant-search-example.component';
import { ObservableComponent } from './observable/observable.component';
import { OperatorsComponent } from './operators/operators.component';
import { RxjsPracticeComponent } from './rxjs-practice/rxjs-practice.component';

const routes: Routes = [
  { path: '', redirectTo: 'observable', pathMatch: 'full' },
  { path: 'observable', component: ObservableComponent },
  { path: 'rxjs', component: RxjsPracticeComponent },
  { path: 'operators', component: OperatorsComponent },
  { path: 'search', component: InstantSearchExampleComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
