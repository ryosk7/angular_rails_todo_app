import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SheetsComponent } from './sheets/sheets.component'


const routes: Routes = [
  { path: 'sheets', component: SheetsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
