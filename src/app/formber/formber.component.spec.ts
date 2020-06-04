import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormberComponent } from './formber.component';

describe('FormberComponent', () => {
  let component: FormberComponent;
  let fixture: ComponentFixture<FormberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
