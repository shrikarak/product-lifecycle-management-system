import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NpiProcesses } from './npi-processes';

describe('NpiProcesses', () => {
  let component: NpiProcesses;
  let fixture: ComponentFixture<NpiProcesses>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NpiProcesses]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NpiProcesses);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
