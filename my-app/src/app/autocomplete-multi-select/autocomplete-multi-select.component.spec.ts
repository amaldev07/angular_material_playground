import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteMultiSelectComponent } from './autocomplete-multi-select.component';

describe('AutocompleteMultiSelectComponent', () => {
  let component: AutocompleteMultiSelectComponent;
  let fixture: ComponentFixture<AutocompleteMultiSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AutocompleteMultiSelectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AutocompleteMultiSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
