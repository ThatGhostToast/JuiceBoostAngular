import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListJuiceComponent } from './list-Juice.component';

describe('ListJuiceComponent', () => {
  let component: ListJuiceComponent;
  let fixture: ComponentFixture<ListJuiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListJuiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListJuiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
