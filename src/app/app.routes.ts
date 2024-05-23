import { Routes } from '@angular/router';
import { CreateInfoComponent } from './info/create-info/create-info.component';
import { ReadInfoComponent } from './info/read-info/read-info.component';
import { UpdateInfoComponent } from './info/update-info/update-info.component';
import { CreateProductionComponent } from './productions/create-production/create-production.component';
import { ReadProductionComponent } from './productions/read-production/read-production.component';
import { DeleteProductionComponent } from './productions/delete-production/delete-production.component';
import { AddUserComponent } from './users/add-user/add-user.component';

export const routes: Routes = [
    { path: 'create-info', component: CreateInfoComponent },
    { path: 'read-info', component: ReadInfoComponent },
    { path: 'update-info:id', component: UpdateInfoComponent },
    { path: 'create-production', component: CreateProductionComponent },
    { path: 'read-production', component: ReadProductionComponent },
    { path: 'delete-production', component: DeleteProductionComponent },
    { path: 'add-user', component: AddUserComponent },
    { path: '', component: CreateProductionComponent },

];
