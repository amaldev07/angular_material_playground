import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  id: number;
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: 1, name: 'Hydrogen', position: 1, weight: 1.0079, symbol: 'H' },
  { id: 2, name: 'Helium', position: 2, weight: 4.0026, symbol: 'He' },
];

@Component({
  selector: 'app-simple-mat-table-with-api',
  templateUrl: './simple-mat-table-with-api.component.html',
  styleUrl: './simple-mat-table-with-api.component.scss'
})
export class SimpleMatTableWithApiComponent {
  displayedColumns: string[] = ['id', 'name', 'position', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.data = ELEMENT_DATA;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
