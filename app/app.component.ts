import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container-fluid">
    <h1 class="bg-primary text-center">To Do List</h1>
    <div class="row">

      <div class="col-md-4">
        <div class="panel panel-default">
          <div class="panel-body">
            <h4>Current Task: {{currentFocus}}</h4>
            <h5 class="text-muted">{{month}}/{{day}}/{{year}}</h5>
            <ul>
              <li [class]="priorityColor(currentTask)" (click)="isDone(currentTask)" *ngFor="let currentTask of tasks">
                {{currentTask.description}}
                <button type="button" class="btn btn-default btn-xs" (click)="editTask(currentTask)">Edit</button>
              </li>
            </ul>
          </div>
        </div>

        <div *ngIf="selectedTask" class="panel panel-default">
          <div class="panel-heading">
            <h4 class="panel-title">Edit Task: {{selectedTask.description}}</h4>
          </div>
          <div class="panel-body">
            <p>Task Status: {{selectedTask.done}}<p>
            <label>Enter New Description</label>
              <input [(ngModel)]="selectedTask.description" type="text" class="form-control">
              <br>
              <label>Enter Priority</label>
              <br>
              <input type="radio" [(ngModel)]="selectedTask.priority" [value]="1"> 1 Low<br>
              <input type="radio" [(ngModel)]="selectedTask.priority" [value]="2"> 2 Medium<br>
              <input type="radio" [(ngModel)]="selectedTask.priority" [value]="3"> 3 High<br>
              <br>
              <button type="button" class="btn btn-default btn-xs" (click)="finishedEditing()">Done</button>
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
  // Property Binding
  tasks: Task[] = [
    new Task('Finish code review', 3),
    new Task('Brainstorm JS group projects', 2),
    new Task('Watch Net Ninja Angular 2 tutorials', 1)
  ];

  selectedTask: Task = null;

  editTask(clickedTask) {
    this.selectedTask = clickedTask;
  }

  // Property Binding
  priorityColor(currentTask) {
    if (currentTask.priority === 3){
      return "text-danger";
    } else if (currentTask.priority === 2) {
      return  "text-warning";
    } else {
      return "text-primary";
    }
  }
    finishedEditing() {
      this.selectedTask = null
    }
}
//Property Binding
export class Task {
  public done: boolean = false;
  constructor(public description: string, public priority: number) { }
}
