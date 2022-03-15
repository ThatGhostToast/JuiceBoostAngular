import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateJuiceComponent } from './create-Juice.component';

describe('CreateAlbumComponent', () => {
  let component: CreateJuiceComponent;
  let fixture: ComponentFixture<CreateJuiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateJuiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateJuiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
