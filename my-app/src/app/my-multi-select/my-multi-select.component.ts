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


  onSelectionChange(e: any) {

    if (this.selectedRegions.length === this.regions.length) {
      this.checked = true;
    } else {
      this.checked = false;
    }
  }


  checked: boolean = false;
  onCheckboxChange(event: any) {
    if (event.checked) {
      this.selectedRegions = [...this.regions];
    } else {
      this.selectedRegions = [];
    }
  }
}
