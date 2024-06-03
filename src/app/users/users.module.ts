import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddUserComponent } from './add-user/add-user.component'; // Import the AddUserComponent
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service'; // Import the UserService

@NgModule({
  declarations: [
    AddUserComponent // Declare the AddUserComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    UserService // Provide the UserService
  ],
  exports: [
    AddUserComponent // Export the AddUserComponent
  ]
})
export class UsersModule { }
