import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarWarsComponent } from './star-wars.component';
import { PageComponent } from './page/page.component';
import { StarwarsRoutingModule } from './star-wars.routing.module';
import { SharedModule } from '../shared/shared.module';
import { GentilFormComponent } from './components/nom-form/gentil-form.component';
import { NomFormUpdateComponent } from './components/nom-form-update/nom-form-update.component';
import { MechantFormComponent } from './components/mechant-form/mechant-form.component';

@NgModule({
  declarations: [
    StarWarsComponent,
    PageComponent,
    GentilFormComponent,
    NomFormUpdateComponent,
    MechantFormComponent,
  ],
  imports: [CommonModule, StarwarsRoutingModule, SharedModule],
})
export class StarWarsModule {}
