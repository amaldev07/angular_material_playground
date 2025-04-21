import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TailwindStylesComponent } from './tailwind-styles.component';

describe('TailwindStylesComponent', () => {
  let component: TailwindStylesComponent;
  let fixture: ComponentFixture<TailwindStylesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TailwindStylesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TailwindStylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
