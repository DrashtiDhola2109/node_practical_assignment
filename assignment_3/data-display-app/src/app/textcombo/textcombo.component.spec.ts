import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextcomboComponent } from './textcombo.component';

describe('TextcomboComponent', () => {
  let component: TextcomboComponent;
  let fixture: ComponentFixture<TextcomboComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextcomboComponent]
    });
    fixture = TestBed.createComponent(TextcomboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
