import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <h1>To Do List <small>{{month}}/{{day}}/{{year}}</small></h1>
        <h3 class="bg-info">Current Task: {{currentFocus}}</h3>
        <ul>
          <li>{{firstTask.description}}</li>
        </ul>
      </div>
    </div>
  </div>
  `
})

export class AppComponent {
  currentFocus: string = 'Angular Homework';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  firstTask = {
    description: "Finish Angular homework for Epicodus"
  }
}
