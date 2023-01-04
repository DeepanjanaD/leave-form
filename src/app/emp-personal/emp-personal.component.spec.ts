import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpPersonalComponent } from './emp-personal.component';

describe('EmpPersonalComponent', () => {
  let component: EmpPersonalComponent;
  let fixture: ComponentFixture<EmpPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpPersonalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
