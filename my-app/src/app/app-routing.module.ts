import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimpleMatTableComponent } from './simple-mat-table/simple-mat-table.component';
import { SimpleMatTableWithApiComponent } from './simple-mat-table-with-api/simple-mat-table-with-api.component';

const routes: Routes = [
  { path: '', redirectTo: '/simple-mat-table', pathMatch: 'full' },
  { path: 'simple-mat-table', component: SimpleMatTableComponent },
  { path: 'simple-table-withapi', component: SimpleMatTableWithApiComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

