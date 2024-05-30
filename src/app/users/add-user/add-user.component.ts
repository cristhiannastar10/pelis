import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../user'; // Asegúrate de que la ruta y el nombre del modelo sean correctos
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']  // Usa styleUrls en lugar de styleUrl
})
export class AddUserComponent implements OnInit {
  userForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      password: ['', [Validators.required]],  
    });
  }

  crearUsuario(): void {
    const usuario: User = this.userForm.value;  // Obtiene el valor del formulario y asegura que el tipo es 'User'

    this.userService.crearUsuario(usuario).subscribe(
      (usuarioCreado: User) => {  // Especifica el tipo de usuarioCreado
        alert('Usuario creado con éxito');
        this.userForm.reset();
      },
      (error: any) => {  // Especifica el tipo de error
        console.error('Error al crear usuario', error);
      }
    );
  }
}
