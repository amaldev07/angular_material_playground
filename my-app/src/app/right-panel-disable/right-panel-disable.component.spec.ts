import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightPanelDisableComponent } from './right-panel-disable.component';

describe('RightPanelDisableComponent', () => {
  let component: RightPanelDisableComponent;
  let fixture: ComponentFixture<RightPanelDisableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RightPanelDisableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RightPanelDisableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
