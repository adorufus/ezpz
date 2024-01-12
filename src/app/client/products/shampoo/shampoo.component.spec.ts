import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShampooComponent } from './shampoo.component';

describe('ShampooComponent', () => {
  let component: ShampooComponent;
  let fixture: ComponentFixture<ShampooComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShampooComponent]
    });
    fixture = TestBed.createComponent(ShampooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
