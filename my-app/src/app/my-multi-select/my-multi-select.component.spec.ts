import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMultiSelectComponent } from './my-multi-select.component';

describe('MyMultiSelectComponent', () => {
  let component: MyMultiSelectComponent;
  let fixture: ComponentFixture<MyMultiSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyMultiSelectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyMultiSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
