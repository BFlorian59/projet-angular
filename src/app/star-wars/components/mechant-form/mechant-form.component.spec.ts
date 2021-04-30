import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MechantFormComponent } from './mechant-form.component';

describe('MechantFormComponent', () => {
  let component: MechantFormComponent;
  let fixture: ComponentFixture<MechantFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MechantFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MechantFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
