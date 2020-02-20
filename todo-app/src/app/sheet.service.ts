import { Injectable } from '@angular/core';
import { Sheet } from './sheet';
import { SHEETS } from './mock-sheets';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SheetService {
  private sheetUrl = 'http://localhost:3000/sheets.json';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getSheets(): Observable<Sheet[]> {
    return this.http.get<Sheet[]>(this.sheetUrl)
  }

  addSheet(sheet: Sheet): Observable<Sheet> {
    return this.http.post<Sheet>(this.sheetUrl, sheet, this.httpOptions)
  }
}
