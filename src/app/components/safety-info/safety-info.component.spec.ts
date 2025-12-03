import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyInfoComponent } from './safety-info.component';

describe('SafetyInfoComponent', () => {
  let component: SafetyInfoComponent;
  let fixture: ComponentFixture<SafetyInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SafetyInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SafetyInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
