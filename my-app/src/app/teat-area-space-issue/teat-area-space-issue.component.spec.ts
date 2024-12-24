import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeatAreaSpaceIssueComponent } from './teat-area-space-issue.component';

describe('TeatAreaSpaceIssueComponent', () => {
  let component: TeatAreaSpaceIssueComponent;
  let fixture: ComponentFixture<TeatAreaSpaceIssueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeatAreaSpaceIssueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeatAreaSpaceIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
