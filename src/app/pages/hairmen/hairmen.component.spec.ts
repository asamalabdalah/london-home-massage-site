import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HairmenComponent } from './hairmen.component';

describe('HairmenComponent', () => {
  let component: HairmenComponent;
  let fixture: ComponentFixture<HairmenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HairmenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HairmenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
