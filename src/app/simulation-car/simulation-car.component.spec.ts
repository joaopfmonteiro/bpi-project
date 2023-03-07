import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulationCarComponent } from './simulation-car.component';

describe('SimulationCarComponent', () => {
  let component: SimulationCarComponent;
  let fixture: ComponentFixture<SimulationCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimulationCarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimulationCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
