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

  constructor(private sheetService: SheetService) { }

  ngOnInit() {
    this.getSheets();
  }

  getSheets(): void {
    this.sheetService.getSheets()
        .subscribe(sheets => this.sheets = sheets);
  }

  add(title: string, content: string): void {
    title = title.trim();
    content = content.trim();
    if (!title) { return; }
    if (!content) { return; }
    this.sheetService.addSheet({ title, content } as Sheet)
      .subscribe(sheet => {
        this.getSheets();
      });
  }
  delete(sheet: Sheet): void {
    this.sheets = this.sheets.filter(s => s !== sheet);
    this.sheetService.deleteSheet(sheet).subscribe(sheet => {
      this.getSheets();
    });
  }
}
