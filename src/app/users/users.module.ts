import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; // Asegúrate de importar ReactiveFormsModule
import { HttpClientModule } from '@angular/common/http';
import { AddUserComponent } from './add-user/add-user.component';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    AddUserComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule, // Importa ReactiveFormsModule aquí
    HttpClientModule
  ],
  providers: [
    UserService
  ],
  exports: [
    AddUserComponent
  ]
})
export class UsersModule { }
