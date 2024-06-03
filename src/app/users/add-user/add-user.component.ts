import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../user'; // Ensure the path and name of the model are correct
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'] // Use styleUrls instead of styleUrl
})
export class AddUserComponent implements OnInit {
  userForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      username: ['', [Validators.required]], // Changed 'nombre' to 'username'
      password: ['', [Validators.required]],  
    });
  }

  crearUsuario(): void {
    const usuario: User = this.userForm.value; // Get form value and ensure the type is 'User'

    this.userService.crearUsuario(usuario).subscribe(
      (usuarioCreado: User) => { // Specify the type of usuarioCreado
        alert('Usuario creado con éxito');
        this.userForm.reset();
      },
      (error: any) => { // Specify the type of error
        console.error('Error al crear usuario', error);
      }
    );
  }
}
