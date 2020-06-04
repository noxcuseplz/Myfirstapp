import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EinkommensteuerFormComponent } from './einkommensteuer-form.component';

describe('EinkommensteuerFormComponent', () => {
  let component: EinkommensteuerFormComponent;
  let fixture: ComponentFixture<EinkommensteuerFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EinkommensteuerFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EinkommensteuerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
