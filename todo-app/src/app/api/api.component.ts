import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {
  commentsRef;
  comments;

  constructor(private http: HttpClient) {
    http.get('http://localhost:3000/comments.json')
      .subscribe(res => this.comments = res);
  }

  addCommentData() {
    this.commentsRef.add(
      {
        content: this.comments.value,
      });
  }

  ngOnInit() {
  }

}
