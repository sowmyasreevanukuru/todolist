import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();
  
  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
  }

  //set Dynamic classes
  setClasses(){
    let classes = {
      todo: true,
      'is-complete':this.todo.completed
    }
    return classes;
  }
      
  onToggle(todo: any){
    todo.completed = !todo.completed;
    this.todoService.toggleCompleted(todo).subscribe(todo => 
      console.log(todo));
    console.log('toggle');
  }

  onDelete(todo: any){
    this.deleteTodo.emit(todo);
    console.log("delete");
  }
}
