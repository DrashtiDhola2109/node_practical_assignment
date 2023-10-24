import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboDisplayComponent } from './combo-display.component';

describe('ComboDisplayComponent', () => {
  let component: ComboDisplayComponent;
  let fixture: ComponentFixture<ComboDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComboDisplayComponent]
    });
    fixture = TestBed.createComponent(ComboDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
