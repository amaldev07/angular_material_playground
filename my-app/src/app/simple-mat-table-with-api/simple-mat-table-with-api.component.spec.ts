import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleMatTableWithApiComponent } from './simple-mat-table-with-api.component';

describe('SimpleMatTableWithApiComponent', () => {
  let component: SimpleMatTableWithApiComponent;
  let fixture: ComponentFixture<SimpleMatTableWithApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SimpleMatTableWithApiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SimpleMatTableWithApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
