import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Gentil } from 'src/app/core/models/gentil';
import { GentilService } from 'src/app/core/service/http/gentil.service';

@Component({
  selector: 'app-gentil-form',
  templateUrl: './gentil-form.component.html',
  styleUrls: ['./gentil-form.component.css'],
})
export class GentilFormComponent implements OnInit {
  gentilForm: FormGroup;
  faction: string[] = ['Gentil'];

  constructor(
    private fb: FormBuilder,
    private _gentilService: GentilService,
    private _dialogRef: MatDialogRef<GentilFormComponent>
  ) {
    this.gentilForm = this.fb.group({
      nom: ['', [Validators.required, this.noWhitespaceValidator]],
      fonction: ['', [Validators.required, this.noWhitespaceValidator]],
      factionId: ['', Validators.required],
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
