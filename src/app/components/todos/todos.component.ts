import { Component } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
})
export class TodosComponent {
  todos: Todo[] = [
    {
      content: 'test',
      completed: false,
    },
    {
      content: 'test2',
      completed: false,
    },
    {
      content: 'testsadasdasdasdasdasdasdsadad2dasdasdasdsadad',
      completed: false,
    },
  ];

  deleteTodo(id: Number) {
    this.todos = this.todos.filter((todo, index) => index !== id);
  }

  completeTodo(id: Number) {
    this.todos.map((todo, index) => {
      if (index === id) todo.completed = true;

      return todo;
    });
  }
}
