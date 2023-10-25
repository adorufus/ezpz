import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkinsightComponent } from './skinsight.component';

describe('SkinsightComponent', () => {
  let component: SkinsightComponent;
  let fixture: ComponentFixture<SkinsightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkinsightComponent]
    });
    fixture = TestBed.createComponent(SkinsightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
