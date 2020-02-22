import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiComponent } from './api/api.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-app';
  comments;
  api: ApiComponent;

  constructor(
    
  ) {
    // this.comments = this.api.comments
  }
}
