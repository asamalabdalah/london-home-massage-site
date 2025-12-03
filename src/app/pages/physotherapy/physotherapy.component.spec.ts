import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysotherapyComponent } from './physotherapy.component';

describe('PhysotherapyComponent', () => {
  let component: PhysotherapyComponent;
  let fixture: ComponentFixture<PhysotherapyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhysotherapyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhysotherapyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
