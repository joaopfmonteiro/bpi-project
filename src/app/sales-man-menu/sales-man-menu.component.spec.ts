import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesManMenuComponent } from './sales-man-menu.component';

describe('SalesManMenuComponent', () => {
  let component: SalesManMenuComponent;
  let fixture: ComponentFixture<SalesManMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesManMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesManMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
