import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationCard } from './verification-card';

describe('VerificationCard', () => {
  let component: VerificationCard;
  let fixture: ComponentFixture<VerificationCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerificationCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerificationCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
