import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UdatefluxComponent } from './udateflux.component';

describe('UdatefluxComponent', () => {
  let component: UdatefluxComponent;
  let fixture: ComponentFixture<UdatefluxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UdatefluxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UdatefluxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
