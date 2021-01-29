import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryDetailComponent } from './components/country-detail/country-detail.component';
import { CountryListComponent } from './components/country-list/country-list.component';

const routes: Routes = [
  {
    // tslint:disable-next-line:quotemark
    path: 'list',
    component: CountryListComponent,
  },
  {
    path: 'country/:id',
    component: CountryDetailComponent,
  },
  {
    path: '**',
    redirectTo: 'list'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
