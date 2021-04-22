import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { CompaniesListComponent } from './companies-list/companies-list.component';
import {RecommendCompaniesComponent} from './recommend-companies/recommend-companies.component';

const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  children: [
    {
      path: 'companies-list',
      component: CompaniesListComponent,
    },
      {
      path: 'recommend-companies',
      component: RecommendCompaniesComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {
}
