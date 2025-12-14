import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityIssues } from './quality-issues';

describe('QualityIssues', () => {
  let component: QualityIssues;
  let fixture: ComponentFixture<QualityIssues>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QualityIssues]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QualityIssues);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
