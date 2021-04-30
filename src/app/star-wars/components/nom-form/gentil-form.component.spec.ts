import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GentilFormComponent } from './gentil-form.component';

describe('GentilFormComponent', () => {
  let component: GentilFormComponent;
  let fixture: ComponentFixture<GentilFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GentilFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GentilFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
