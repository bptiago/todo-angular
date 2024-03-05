import { Component } from '@angular/core';
import { Todo } from '../../models/Todo';
import { FormControl, Validators } from '@angular/forms';

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

  newTodo = new FormControl('', [Validators.required]);

  deleteTodo(id: Number) {
    this.todos = this.todos.filter((todo, index) => index !== id);
  }

  completeTodo(id: Number) {
    this.todos.map((todo, index) => {
      if (index === id) todo.completed = !todo.completed;

      return todo;
    });
  }

  createTodo() {
    if (this.newTodo.invalid) {
      return;
    }

    const todo: Todo = {
      content: this.newTodo.value,
      completed: false,
    };

    this.todos.push(todo);
  }
}
