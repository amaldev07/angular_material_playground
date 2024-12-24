import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGridListComponent } from './my-grid-list.component';

describe('MyGridListComponent', () => {
  let component: MyGridListComponent;
  let fixture: ComponentFixture<MyGridListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyGridListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyGridListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
