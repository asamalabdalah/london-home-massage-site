import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsteopathyComponent } from './osteopathy.component';

describe('OsteopathyComponent', () => {
  let component: OsteopathyComponent;
  let fixture: ComponentFixture<OsteopathyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OsteopathyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OsteopathyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
