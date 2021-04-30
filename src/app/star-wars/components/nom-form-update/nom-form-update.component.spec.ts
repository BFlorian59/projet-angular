import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NomFormUpdateComponent } from './nom-form-update.component';

describe('NomFormUpdateComponent', () => {
  let component: NomFormUpdateComponent;
  let fixture: ComponentFixture<NomFormUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NomFormUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NomFormUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
