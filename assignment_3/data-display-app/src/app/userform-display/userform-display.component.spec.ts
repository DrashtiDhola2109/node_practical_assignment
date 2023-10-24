import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserformDisplayComponent } from './userform-display.component';

describe('UserformDisplayComponent', () => {
  let component: UserformDisplayComponent;
  let fixture: ComponentFixture<UserformDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserformDisplayComponent]
    });
    fixture = TestBed.createComponent(UserformDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
