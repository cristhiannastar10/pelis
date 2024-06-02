import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  userForm!: FormGroup;
  usuarioCreado: User | null = null;  // Define la propiedad usuarioCreado

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      password: ['', [Validators.required]],  
    });
  }

  crearUsuario(): void {
    if (this.userForm.valid) {
      const nombre = this.userForm.get('nombre')?.value;
      const password = this.userForm.get('password')?.value;
      const usuario = new User(nombre, password);  // Crea una instancia de User con ambos argumentos

      console.log('Formulario enviado', usuario);  // Añade este log para verificar que el método se está llamando

      this.usuarioCreado = usuario;  // Simula la creación del usuario sin llamar al backend

      alert('Usuario creado con éxito');  // Muestra el mensaje de éxito
      this.userForm.reset();  // Resetea el formulario
    }
  }
}
