import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectorCardsComponent } from './inspector-cards';

describe('InspectorCardsComponent', () => {
  let component: InspectorCardsComponent;
  let fixture: ComponentFixture<InspectorCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InspectorCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InspectorCardsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
