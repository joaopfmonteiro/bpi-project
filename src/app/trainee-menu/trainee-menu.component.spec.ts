import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineeMenuComponent } from './trainee-menu.component';

describe('TraineeMenuComponent', () => {
  let component: TraineeMenuComponent;
  let fixture: ComponentFixture<TraineeMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraineeMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TraineeMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
