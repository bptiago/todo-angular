import { Injectable } from '@angular/core';
import { Todo } from '../models/TodoInterface';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  protected todoItemsGroup: Todo[] = this.getAllTodoItems()

  getAllTodoItems() : Todo[] {
    const todoItems: Todo[] = [];

    axios.get("http://localhost:8080/items/getAll")
    .then(function ({data} : {data: Todo[]}) {
      data.forEach(item => todoItems.push(item));
    })
    return todoItems;
  }

  constructor() { }
}
