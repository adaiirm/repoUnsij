import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule, NgFor],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginData = {
    email: "",
    password: "",
  }

  carreras = [
    "Ingeniería en Desarrollo de Software y Sistemas Inteligentes",
    "Ingeniería Forestal",
    "Licenciatura en Administración Turística",
    "Licenciatura en Biología",
    "Licenciatura en Ciencias Ambientales",
  ]

  onSubmit() {
    console.log("Login attempt:", this.loginData)
    // Aquí iría la lógica de autenticación
  }
}
