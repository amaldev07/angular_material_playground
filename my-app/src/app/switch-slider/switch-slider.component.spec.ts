import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchSliderComponent } from './switch-slider.component';

describe('SwitchSliderComponent', () => {
  let component: SwitchSliderComponent;
  let fixture: ComponentFixture<SwitchSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SwitchSliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SwitchSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
