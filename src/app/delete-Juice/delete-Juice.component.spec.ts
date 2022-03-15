import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteJuiceComponent } from './delete-Juice.component';

describe('DeleteJuiceComponent', () => {
  let component: DeleteJuiceComponent;
  let fixture: ComponentFixture<DeleteJuiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteJuiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteJuiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
