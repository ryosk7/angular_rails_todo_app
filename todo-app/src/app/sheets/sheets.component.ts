import { Component, OnInit } from '@angular/core';
import { Sheet } from '../sheet';

@Component({
  selector: 'app-sheets',
  templateUrl: './sheets.component.html',
  styleUrls: ['./sheets.component.scss']
})
export class SheetsComponent implements OnInit {

  sheet: Sheet = {
    title: 'zapaanつくる！',
    content: 'angular on railsで!'
  };

  constructor() { }

  ngOnInit() {
    this.sheet;
  }
}
