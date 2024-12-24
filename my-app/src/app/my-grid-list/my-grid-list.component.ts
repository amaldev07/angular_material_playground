import { Component } from '@angular/core';

@Component({
  selector: 'app-my-grid-list',
  templateUrl: './my-grid-list.component.html',
  styleUrl: './my-grid-list.component.scss'
})
export class MyGridListComponent {
  displayedColumns: string[] = ['id', 'name', 'age', 'role'];
  dataSource = [
    { id: 1, name: 'John Doe', age: 25, role: 'Developer' },
    { id: 2, name: 'Jane Smith', age: 30, role: 'Designer' },
    { id: 3, name: 'Sam Wilson', age: 35, role: 'Manager' },
    { id: 4, name: 'Lisa Brown', age: 28, role: 'Tester' },
  ];
}
