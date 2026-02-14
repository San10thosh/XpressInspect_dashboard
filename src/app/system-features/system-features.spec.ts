import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemFeatures } from './system-features';

describe('SystemFeatures', () => {
  let component: SystemFeatures;
  let fixture: ComponentFixture<SystemFeatures>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SystemFeatures]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SystemFeatures);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
