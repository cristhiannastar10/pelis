import { Routes } from '@angular/router';
import {InformationComponent} from './pages/information/information.component'
import {ProductionsComponent} from './pages/productions/productions.component'
import {ProfilesComponent} from './pages/profiles/profiles.component'

export const routes: Routes = [
    { path: 'information', component: InformationComponent },
    { path: 'productions', component: ProductionsComponent },
    { path: 'profiles', component: ProfilesComponent },
    { path: '', redirectTo: '/information', pathMatch: 'full' }
];
