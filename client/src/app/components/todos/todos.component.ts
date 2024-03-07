import { Component, inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/TodoInterface';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
})
export class TodosComponent {
  todos: Todo[] = [];
  todoService:TodoService = inject(TodoService)
  newTodo = new FormControl('', [Validators.required]);

  constructor() {
    this.todos = this.todoService.getAllTodoItems();
  }

  deleteTodo(id: Number) {
    this.todos = this.todos.filter((todo, index) => index !== id);
  }

  completeTodo(id: Number) {
    this.todos.map((todo, index) => {
      if (index === id) todo.isComplete = !todo.isComplete;

      return todo;
    });
  }

  createTodo() {
    if (this.newTodo.invalid) {
      return;
    }

    const todo: Todo = {
      content: this.newTodo.value,
      isComplete: false,
    };
    this.todos.push(todo);
  }
}
