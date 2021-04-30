import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Gentil } from 'src/app/core/models/gentil';
import { GentilService } from 'src/app/core/service/http/gentil.service';
import { MechantFormComponent } from '../components/mechant-form/mechant-form.component';
import { NomFormUpdateComponent } from '../components/nom-form-update/nom-form-update.component';
import { GentilFormComponent } from '../components/nom-form/gentil-form.component';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
})
export class PageComponent implements OnInit {
  gentil$: Observable<Gentil[]> = new Observable<Gentil[]>();
  nomId: number | undefined;
  displayedColumns: string[] = [
    'id',
    'nom',
    'fonction',
    'factionId',
    'update',
    'delete',
  ];

  constructor(
    private _gentilService: GentilService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.gentil$ = this._gentilService.get();
  }

  delete(gentil: Gentil) {
    this._gentilService.delete(gentil).subscribe((next) => {
      this.loadData();
    });
  }

  openDialogG() {
    const dialogRef = this.dialog.open(GentilFormComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
      this.loadData();
    });
  }

  openDialogM() {
    const dialogRef = this.dialog.open(MechantFormComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
      this.loadData();
    });
  }

  openDialogUpdate() {
    console.log('OPEN FORM UPDATE');

    const dialogRef = this.dialog.open(NomFormUpdateComponent, {
      data: { id: this.nomId },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
      window.location.reload();
    });
  }
}
