import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


import {Todo} from "../shared/todo.model";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit{

  // @ts-ignore
  @Input() todo: Todo;

  @Output() todoClicked: EventEmitter<void> = new EventEmitter();
  @Output() editClicked: EventEmitter<void> = new EventEmitter();
  constructor () { }
  onTodoClicked() {
    // console.log("todo was clicked");
    this.todoClicked.emit();


  }
  onEditClicked() {
    this.editClicked.emit();

  }

  ngOnInit(): void {
      throw new Error('Method not implemented.');
  }

}
