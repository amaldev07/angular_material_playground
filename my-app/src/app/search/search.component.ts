import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FormControl } from '@angular/forms';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  myControl = new FormControl<string>('');
  options = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
  filteredOptions: Observable<string[]> = new Observable();

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = value;
        return name ? this._filter(name as string) : this.options.slice();
      }),
    );
  }

  displayFn(user: string): string {
    return user || '';
  }

  private _filter(name: string): string[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}
