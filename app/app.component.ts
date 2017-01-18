import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <h1 class="bg-primary">Tasks</h1>

        <div class="panel panel-default">
          <div class="panel-body">
            <h4>Current Task: {{currentFocus}}</h4>
            <h5>{{month}}/{{day}}/{{year}}</h5>
            <ul>
              <li *ngFor="let currentTask of tasks">{{currentTask.description}}</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  </div>
  `
})

export class AppComponent {
  currentFocus: string = 'Epicodus Homework';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  tasks: Task[] = [
    new Task('Finish Angular homework'),
    new Task('Brainstorm JS group projects'),
    new Task('Watch Net Ninja Angular 2 Tutorials')
  ];
}

export class Task {
  public done: boolean = false;
  constructor(public description: string) { }
}
