import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Todo} from "../shared/todo.model";
import {DataService} from "../shared/data.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit{

  // @ts-ignore
  todos: Todo[];

  // @ts-ignore
  showValidationErrors: boolean;

  constructor(private dataService: DataService) {

  }

  ngOnInit(): void {
    this.todos = this.dataService.getAllTodos();
  }

  // @ts-ignore
  onFormSubmit(form: NgForm) {

    if (form.invalid) { return this.showValidationErrors = true }

    this.dataService.addTodo(new Todo(form.value.text));

    this.showValidationErrors = false;
    form.reset();

  }

  toggleCompleted(todo: Todo) {
    todo.completed = !todo.completed;
  }

}
