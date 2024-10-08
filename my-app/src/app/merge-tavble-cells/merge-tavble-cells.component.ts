import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

export interface ElementData {
  id: number;
  name: string;
  progress: number;
  color: string;
}

const ELEMENT_DATA: ElementData[] = [
  { id: 1, name: 'Hydrogen', progress: 80, color: 'lightblue' },
  { id: 2, name: 'Helium', progress: 60, color: 'yellow' },
  { id: 3, name: 'Lithium', progress: 50, color: 'red' },
  { id: 4, name: 'Beryllium', progress: 70, color: 'orange' },
  { id: 5, name: 'Boron', progress: 40, color: 'green' },
];

@Component({
  selector: 'app-merge-tavble-cells',
  templateUrl: './merge-tavble-cells.component.html',
  styleUrl: './merge-tavble-cells.component.scss'
})
export class MergeTavbleCellsComponent {

  displayedColumns: string[] = ['id', 'name', 'progress', 'color', 'action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteRow(id: number) {
    this.dataSource.data = this.dataSource.data.filter((item) => item.id !== id);
  }
}
