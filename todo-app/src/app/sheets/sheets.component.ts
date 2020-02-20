import { Component, OnInit } from '@angular/core';
import { Sheet } from '../sheet';
import { SheetService } from '../sheet.service'

@Component({
  selector: 'app-sheets',
  templateUrl: './sheets.component.html',
  styleUrls: ['./sheets.component.scss']
})
export class SheetsComponent implements OnInit {

  sheets: Sheet[];

  sheet: Sheet = {
    title: 'zapaanつくる！',
    content: 'angular on railsで!'
  };

  constructor(private sheetService: SheetService) { }

  ngOnInit() {
    this.getSheets();
  }

  getSheets(): void {
    this.sheetService.getSheets()
        .subscribe(sheets => this.sheets = sheets);
  }
}
