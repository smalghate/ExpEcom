import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReimbursementScreenComponent } from './reimbursement-screen.component';

describe('ReimbursementScreenComponent', () => {
  let component: ReimbursementScreenComponent;
  let fixture: ComponentFixture<ReimbursementScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReimbursementScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReimbursementScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
