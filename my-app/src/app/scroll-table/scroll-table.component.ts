import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

interface Element {
  position: number;
  name: string;
}

const ELEMENT_DATA: Element[] = [
  { position: 1, name: 'Hydrogen' },
  { position: 2, name: 'Helium' },
  { position: 3, name: 'Lithium' },
  { position: 4, name: 'Beryllium' },
  { position: 5, name: 'Boron' },
  // Add more elements as needed
];

@Component({
  selector: 'app-scroll-table',
  templateUrl: './scroll-table.component.html',
  styleUrl: './scroll-table.component.scss'
})
export class ScrollTableComponent {
  displayedColumns: string[] = ['position', 'name'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
}
