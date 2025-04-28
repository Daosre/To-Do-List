import {
  ChangeDetectionStrategy,
  Component,
  model,
  signal,
  Signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

interface todoItem {
  id: number;
  name: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatCheckboxModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  todolist: Signal<todoItem[]> = signal([]);

  name = model('');

  add(): void {
    const obj: todoItem = {
      name: this.name(),
      completed: false,
      id: this.todolist().length++,
    };
    this.todolist().push(obj);
    this.name.set('');
  }
}
