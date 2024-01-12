import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ng-signals';

  todos: Array<{ done: boolean; text: string }> = [];

  add(text: string) {
    this.todos.push({ text, done: false });
  }

  toggle(index: number) {}
}
