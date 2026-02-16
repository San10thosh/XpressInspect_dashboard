import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectorProfile } from './inspector-profile';

describe('InspectorProfile', () => {
  let component: InspectorProfile;
  let fixture: ComponentFixture<InspectorProfile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InspectorProfile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InspectorProfile);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
