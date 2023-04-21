import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TodosComponent} from "./todos/todos.component";
// import {ToolTipDirective} from "./shared/tool-tip.directive";

const routes: Routes = [
  { path: '', component: TodosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
