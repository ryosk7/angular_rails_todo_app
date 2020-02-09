import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-app';
  commentsRef;
  comments;

  constructor(private http: HttpClient) {
    http.get('http://localhost:3000/comments.json')
      .subscribe(res => this.comments = res);
  }

  addCommentData(content: string, initial: string, username: string) {
    this.commentsRef.add(
      {
        content: this.comments.value,
      });
  }
}
