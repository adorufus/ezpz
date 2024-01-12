import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodywashComponent } from './bodywash.component';

describe('BodywashComponent', () => {
  let component: BodywashComponent;
  let fixture: ComponentFixture<BodywashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodywashComponent]
    });
    fixture = TestBed.createComponent(BodywashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
