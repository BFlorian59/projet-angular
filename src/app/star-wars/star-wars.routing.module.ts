import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StarWarsComponent } from './star-wars.component';
import { PageComponent } from './page/page.component';
import { NotFoundComponent } from '../shared/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: StarWarsComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'gentil',
      },
      {
        path: 'gentil',
        component: PageComponent,
      },
      {
        path: '**',
        component: NotFoundComponent,
      },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StarwarsRoutingModule {}
