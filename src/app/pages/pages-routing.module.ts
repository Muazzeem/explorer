import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {PagesComponent} from './pages.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {NotFoundComponent} from './miscellaneous/not-found/not-found.component';
import {ProfileComponent} from './profile/profile.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {SettingsComponent} from './settings/settings.component';
import {AddCompanyComponent} from './add-company/add-company.component';

const routes: Routes = [{
    path: '',
    component: PagesComponent,
    children: [
        {
            path: 'dashboard',
            component: DashboardComponent,
        },
        {
            path: 'profile',
            component: ProfileComponent,
        },
        {
            path: 'settings',
            component: SettingsComponent,
        },
        {
            path: 'login',
            component: SignUpComponent,
        },
        {
            path: 'new-job-post',
            component: AddCompanyComponent,
        },
        {
            path: 'layout',
            loadChildren: () => import('./layout/layout.module')
                .then(m => m.LayoutModule),
        },
        {
            path: 'forms',
            loadChildren: () => import('./forms/forms.module')
                .then(m => m.FormsModule),
        },
        {
            path: 'modal-overlays',
            loadChildren: () => import('./modal-overlays/modal-overlays.module')
                .then(m => m.ModalOverlaysModule),
        },
        {
            path: 'miscellaneous',
            loadChildren: () => import('./miscellaneous/miscellaneous.module')
                .then(m => m.MiscellaneousModule),
        },
        {
            path: '',
            redirectTo: 'dashboard',
            pathMatch: 'full',
        },
        {
            path: '**',
            component: NotFoundComponent,
        },
    ],
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PagesRoutingModule {
}
