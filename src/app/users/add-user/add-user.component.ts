import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../user'; // Ensure the path to the User model is correct
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  userForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  crearUsuario(): void {
    const usuario: User = this.userForm.value;

    this.userService.crearUsuario(usuario).subscribe(
      (usuarioCreado: User) => {
        alert('Usuario creado con éxito');
        this.userForm.reset();
      },
      (error: any) => {
        console.error('Error al crear usuario', error);
      }
    );
  }
}
