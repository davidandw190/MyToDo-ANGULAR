import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TodoItemComponent} from "./todo-item/todo-item.component";
import {TodosComponent} from "./todos/todos.component";
<<<<<<< HEAD
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditTodoDialogComponent } from './edit-todo-dialog/edit-todo-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
=======
>>>>>>> origin/master

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
<<<<<<< HEAD
    TodoItemComponent,
    EditTodoDialogComponent
=======
    TodoItemComponent
>>>>>>> origin/master
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule
=======
    FormsModule
>>>>>>> origin/master
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
