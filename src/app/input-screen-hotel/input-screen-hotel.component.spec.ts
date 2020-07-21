import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputScreenHotelComponent } from './input-screen-hotel.component';

describe('InputScreenHotelComponent', () => {
  let component: InputScreenHotelComponent;
  let fixture: ComponentFixture<InputScreenHotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputScreenHotelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputScreenHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
