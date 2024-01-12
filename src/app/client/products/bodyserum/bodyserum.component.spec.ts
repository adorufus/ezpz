import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyserumComponent } from './bodyserum.component';

describe('BodyserumComponent', () => {
  let component: BodyserumComponent;
  let fixture: ComponentFixture<BodyserumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodyserumComponent]
    });
    fixture = TestBed.createComponent(BodyserumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
