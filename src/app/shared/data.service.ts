import { Injectable } from '@angular/core';
import {Todo} from "./todo.model";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  todos: Todo[] = [
<<<<<<< HEAD
    new Todo("This is a test."),
    new Todo("This is another test.")
=======
    new Todo("this is a test"),
    new Todo("Lorem ipsum idifd adas dad sdsdwaas asd ")
>>>>>>> origin/master
  ]

  constructor() { }

  getAllTodos() {
    return this.todos
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  updateTodo(index: number, updatedTodo: Todo) {
    this.todos[index] = updatedTodo;
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1)
  }
}
