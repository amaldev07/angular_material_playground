import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeTavbleCellsComponent } from './merge-tavble-cells.component';

describe('MergeTavbleCellsComponent', () => {
  let component: MergeTavbleCellsComponent;
  let fixture: ComponentFixture<MergeTavbleCellsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MergeTavbleCellsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MergeTavbleCellsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
