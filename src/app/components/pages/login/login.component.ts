import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgFor } from '@angular/common';
import { AuthService } from '../../../services/auth-service.service';
import { Router } from 'express';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule, NgFor],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginData = {
    correo: "",
    contrasenia: "",
  
  }
  constructor(private authService: AuthService, private router: Router) {}

  carreras = [
    "Ingeniería en Desarrollo de Software y Sistemas Inteligentes",
    "Ingeniería Forestal",
    "Licenciatura en Administración Turística",
    "Licenciatura en Biología",
    "Licenciatura en Ciencias Ambientales",
  ]

  onSubmit() {
  console.log("Login attempt:", this.loginData);

    this.authService.login(this.loginData).subscribe({
      next: (response) => {
        console.log("Login successful:", response);
        // Redireccionar o mostrar mensaje de éxito
      },
      error: (error) => {
        console.error("Login failed:", error);
        // Mostrar mensaje de error al usuario
      }
    });
  }
}
