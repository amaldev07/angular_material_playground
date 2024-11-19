import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavCollapsibleComponent } from './sidenav-collapsible.component';

describe('SidenavCollapsibleComponent', () => {
  let component: SidenavCollapsibleComponent;
  let fixture: ComponentFixture<SidenavCollapsibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidenavCollapsibleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidenavCollapsibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
