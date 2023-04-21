import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  todos: Todo[] = [
    new Todo('Build a RESTful API in Go.', false),
    new Todo('Drink more water!', true),
    new Todo('Take the dogs out for a walk', true),
    new Todo('Meet for the programming project.', true)
  ]

  constructor() { }

  getAllTodos() {
    return this.todos
  }

  addTodo(todo: Todo) {
    this.todos.push(todo)
  }

  updateTodo(index: number, updatedTodo: Todo) {
    this.todos[index] = updatedTodo
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1)
  }

}
