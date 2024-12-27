import { Component } from '@angular/core';

@Component({
  selector: 'app-my-grid',
  templateUrl: './my-grid.component.html',
  styleUrl: './my-grid.component.scss'
})
export class MyGridComponent {
  items = [
    { title: 'Panel 1', content: 'Content for Panel 1' },
    { title: 'Panel 2', content: 'Content for Panel 2' },
    { title: 'Panel 3', content: 'Content for Panel 3' },
    { title: 'Panel 4', content: 'Content for Panel 4' },
  ];
}

 