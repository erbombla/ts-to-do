import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1 class="bg-primary">Tasks</h1>
    <div class="row">

      <div class="col-md-4">
        <div class="panel panel-default">
          <div class="panel-body">
            <h4>Current Task: {{currentFocus}}</h4>
            <h5>{{month}}/{{day}}/{{year}}</h5>
            <ul>
              <li [class]="priorityColor(currentTask)" (click)="isDone(currentTask)" *ngFor="let currentTask of tasks">{{currentTask.description}} <button class="btn btn-default btn-xs" type="button" (click)="editTask(currentTask)">Edit</button></li>
            </ul>
          </div>
        </div>

        <div *ngIf="selectedTask" class="panel panel-primary">
          <div class="panel-heading">
            <h4 class="panel-title">Selected Task: {{selectedTask.description}}</h4>
          </div>
          <div class="panel-body">
            <p>Task Complete? {{selectedTask.done}}<p>
            <h5>Edit Task</h5>
            <label>Enter Task Description:</label>
              <input [(ngModel)]="selectedTask.description" type="text" class="form-control">
              <br>
              <label>Enter Task Priority (1-3):</label>
              <br>
              <input type="radio" [(ngModel)]="selectedTask.priority" [value]="1"> 1 (Low Priority)<br>
              <input type="radio" [(ngModel)]="selectedTask.priority" [value]="2"> 2 (Medium Priority)<br>
              <input type="radio" [(ngModel)]="selectedTask.priority" [value]="3"> 3 (High Priority)
              <br>
              <button class="btn btn-default btn-xs" type="button" (click)="finishedEditing">Submit</button>
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
    new Task('Finish Angular homework', 3),
    new Task('Brainstorm JS group projects', 2),
    new Task('Watch Net Ninja Angular 2 Tutorials', 2)
  ];

  selectedTask: Task = null;

  finishedEditing() {
    this.selectedTask = null
  }

  editTask(clickedTask) {
    this.selectedTask = clickedTask;
  }


  priorityColor(currentTask) {
    if (currentTask.priority === 3){
      return "bg-danger";
    } else if (currentTask.priority === 2) {
      return  "bg-warning";
    } else {
      return "bg-info";
    }
  }
}

export class Task {
  public done: boolean = false;
  constructor(public description: string, public priority: number) { }
}
