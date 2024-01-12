import { Component, Signal, computed } from '@angular/core';
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
  finishedCount!: Signal<number>;

  todos: Array<{ done: boolean; text: string }> = [];

  add(text: string, e: SubmitEvent) {
    e.preventDefault();
    this.todos.push({ text, done: false });
  }

  toggle(index: number) {
    this.todos[index].done = !this.todos[index].done;
  }

  ngOnInit() {
    this.finishedCount = computed(() => {
      return this.todos.filter((item) => !!item.done).length;
    });
  }
}
