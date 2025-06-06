import { Component } from '@angular/core';

@Component({
  selector: 'app-my-multi-select',
  templateUrl: './my-multi-select.component.html',
  styleUrl: './my-multi-select.component.scss'
})
export class MyMultiSelectComponent {
  regions = [
    'North America',
    'South America',
    'Europe',
    'Asia',
    'Africa',
    'Australia',
    'Antarctica'
  ];
  selectedRegions: string[] = [];
  onSelectionChange(e:any) {
    this.selectedRegions = e.value;
    console.log('Selected Regions:', this.selectedRegions);

  }
}
