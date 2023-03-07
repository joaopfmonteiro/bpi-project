import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulationHomeComponent } from './simulation-home.component';

describe('SimulationHomeComponent', () => {
  let component: SimulationHomeComponent;
  let fixture: ComponentFixture<SimulationHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimulationHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimulationHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
