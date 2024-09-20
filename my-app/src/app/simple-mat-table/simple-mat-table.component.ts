import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  id: number;
  name: string;
  name1: string;
  name2: string;
  name3: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: 1, name: 'Hydrogen', position: 1, weight: 1.0079, symbol: 'H', name1: 'Hydrogen', name2: 'Hydrogen',name3: 'Hydrogen' },
  { id: 2, name: 'Helium', position: 2, weight: 4.0026, symbol: 'He', name1: 'Hydrogen', name2: 'Hydrogen',name3: 'Hydrogen' },
];

@Component({
  selector: 'app-simple-mat-table',
  templateUrl: './simple-mat-table.component.html',
  styleUrl: './simple-mat-table.component.scss'
})
export class SimpleMatTableComponent {
  displayedColumns: string[] = ['id', 'name', 'position', 'weight', 'symbol', 'name1', 'name2','name3'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
