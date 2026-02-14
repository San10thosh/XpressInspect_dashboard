import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectorCards } from './inspector-cards';

describe('InspectorCards', () => {
  let component: InspectorCards;
  let fixture: ComponentFixture<InspectorCards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InspectorCards]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InspectorCards);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
