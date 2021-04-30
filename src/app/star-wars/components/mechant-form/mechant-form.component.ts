import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Gentil } from 'src/app/core/models/gentil';
import { GentilService } from 'src/app/core/service/http/gentil.service';
import { GentilFormComponent } from '../nom-form/gentil-form.component';

@Component({
  selector: 'app-mechant-form',
  templateUrl: './mechant-form.component.html',
  styleUrls: ['./mechant-form.component.css'],
})
export class MechantFormComponent implements OnInit {
  gentilForm: FormGroup;
  faction: string[] = ['Méchant'];

  constructor(
    private fb: FormBuilder,
    private _gentilService: GentilService,
    private _dialogRef: MatDialogRef<GentilFormComponent>
  ) {
    this.gentilForm = this.fb.group({
      Name: ['', [Validators.required, this.noWhitespaceValidator]],
      fonction: ['', [Validators.required, this.noWhitespaceValidator]],
      faction: ['', Validators.required, this.noWhitespaceValidator],
    });
  }

  ngOnInit(): void {}

  onSubmit(gentil: Gentil) {
    if (this.gentilForm.valid) {
      this._gentilService.post(gentil).subscribe((next) => {
        console.log('YES');
        this.gentilForm.reset();
        this._dialogRef.close();
      });
    }
  }

  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;

    const isValid = !isWhitespace;
    return isValid ? null : { whitespace: true };
  }
}
