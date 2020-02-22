import { Injectable } from '@angular/core';
import { Sheet } from './sheet';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SheetService {
  private sheetUrl = 'http://localhost:3000/sheets';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getSheets(): Observable<Sheet[]> {
    return this.http.get<Sheet[]>(this.sheetUrl + '.json')
  }

  addSheet(sheet: Sheet): Observable<Sheet> {
    return this.http.post<Sheet>(this.sheetUrl + '.json', sheet, this.httpOptions)
  }

  deleteSheet(sheet: Sheet | number): Observable<Sheet> {
    const id = typeof sheet === 'number' ? sheet : sheet.id;
    const url = `${this.sheetUrl}/${id}`;

    return this.http.delete<Sheet>(url + '.json', this.httpOptions);
  }
}
