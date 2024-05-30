import { Routes } from '@angular/router';
import { CreateInfoComponent } from './info/create-info/create-info.component';
import { ReadInfoComponent } from './info/read-info/read-info.component';
import { UpdateInfoComponent } from './info/update-info/update-info.component';
import { ReadProductionComponent } from './productions/read-production/read-production.component';
import { DeleteProductionComponent } from './info/delete-info/delete-info.component';
import { AddUserComponent } from './users/add-user/add-user.component';

export const routes: Routes = [
  {
    path: '',
    component: ReadInfoComponent,
  },
  {
    path: 'crear-info',
    component: CreateInfoComponent,
  },
  {
    path: 'actualizar-info/:id',
    component: UpdateInfoComponent,
  },
  {
    path: 'leer-produccion',
    component: ReadProductionComponent,
  },
  {
    path: 'borrar-info/:id',
    component: DeleteProductionComponent,
  },
  {
    path: 'agregar-usuario',
    component: AddUserComponent,
  },
];
