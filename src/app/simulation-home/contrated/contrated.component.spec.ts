import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratedComponent } from './contrated.component';

describe('ContratedComponent', () => {
  let component: ContratedComponent;
  let fixture: ComponentFixture<ContratedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContratedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContratedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
