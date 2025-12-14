import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineeringChanges } from './engineering-changes';

describe('EngineeringChanges', () => {
  let component: EngineeringChanges;
  let fixture: ComponentFixture<EngineeringChanges>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EngineeringChanges]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineeringChanges);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
