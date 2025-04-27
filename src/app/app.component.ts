import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  todo = '';
  todolist: { id: number; name: string }[] = [];

  addTask() {
    this.todolist.push({ id: this.todolist.length + 1, name: this.todo });
  }

  deleteTask(id: number) {
    this.todolist = this.todolist.filter((element) => element.id != id);
  }
}
