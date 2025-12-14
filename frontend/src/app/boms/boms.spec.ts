import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Boms } from './boms';

describe('Boms', () => {
  let component: Boms;
  let fixture: ComponentFixture<Boms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Boms]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Boms);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
