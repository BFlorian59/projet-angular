import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Faction } from 'src/app/core/models/faction';
import { Gentil } from 'src/app/core/models/gentil';
import { GentilService } from 'src/app/core/service/http/gentil.service';

@Component({
  selector: 'app-nom-form-update',
  templateUrl: './nom-form-update.component.html',
  styleUrls: ['./nom-form-update.component.css'],
})
export class NomFormUpdateComponent implements OnInit {
  gentilForm: FormGroup;
  nomId: number | undefined;
  faction: string[] = ['Méchant', 'Gentil'];

  constructor(
    private fb: FormBuilder,
    private _gentilService: GentilService,
    private _dialogRef: MatDialogRef<NomFormUpdateComponent>,
    private _activateRoute: ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) public data: Gentil
  ) {
    this.gentilForm = this.fb.group({
      Name: ['', [Validators.required, this.noWhitespaceValidator]],
      faction: ['', [Validators.required, this.noWhitespaceValidator]],
      fonction: ['', Validators.required, this.noWhitespaceValidator],
    });
  }

  ngOnInit(): void {
    this.nomId = Number(this._activateRoute.snapshot.paramMap.get('id'));
  }

  onSubmit(gentil: Gentil) {
    if (this.gentilForm.valid) {
      this._gentilService.put(gentil, this.data.id).subscribe((next) => {
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
