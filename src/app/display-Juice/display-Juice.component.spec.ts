import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayJuiceComponent } from './display-Juice.component';

describe('DisplayJuiceComponent', () => {
  let component: DisplayJuiceComponent;
  let fixture: ComponentFixture<DisplayJuiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayJuiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayJuiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
