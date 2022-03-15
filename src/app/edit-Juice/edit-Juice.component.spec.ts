import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditJuiceComponent } from './edit-Juice.component';

describe('EditJuiceComponent', () => {
  let component: EditJuiceComponent;
  let fixture: ComponentFixture<EditJuiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditJuiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditJuiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
