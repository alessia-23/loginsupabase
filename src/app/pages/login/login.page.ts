import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonText,
  IonCard,
  IonCardContent
} from '@ionic/angular/standalone';

import { SupabaseService } from '../../services/supabase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonText,
    IonCard,
    IonCardContent
  ]
})

export class LoginPage {

  // Variables para guardar correo, contraseña y mensajes
  email = '';
  password = '';
  mensaje = '';

  constructor(
    private supabaseService: SupabaseService,
    private router: Router
  ) { }

  // Método para iniciar sesión
  async login() {

    // Limpia mensajes anteriores
    this.mensaje = '';

    // Validar campos vacíos
    if (!this.email.trim() || !this.password.trim()) {
      this.mensaje = 'Todos los campos son obligatorios';
      return;
    }

    // Validar formato del correo
    if (!this.validarCorreo(this.email)) {
      this.mensaje = 'Ingrese un correo válido';
      return;
    }

    // Login con Supabase
    const { error } = await this.supabaseService.login(
      this.email.trim(),
      this.password.trim()
    );

    // Verifica errores
    if (error) {
      this.mensaje = 'Correo o contraseña incorrectos';
      return;
    }

    // Redirecciona al inicio
    this.router.navigateByUrl('/tabs/inicio');
  }

  // Método para registrar usuarios
  async register() {

    // Limpia mensajes anteriores
    this.mensaje = '';

    // Validar campos vacíos
    if (!this.email.trim() || !this.password.trim()) {
      this.mensaje = 'Todos los campos son obligatorios';
      return;
    }

    // Validar formato de correo
    if (!this.validarCorreo(this.email)) {
      this.mensaje = 'Ingrese un correo válido';
      return;
    }

    // Expresión regular para contraseña segura
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,12}$/;

    // Validar contraseña
    if (!passwordRegex.test(this.password)) {
      this.mensaje =
        'La contraseña debe tener entre 6 y 12 caracteres, mayúsculas, minúsculas, números y caracteres especiales';
      return;
    }

    // Registro en Supabase
    const { data, error } = await this.supabaseService.register(
      this.email.trim(),
      this.password.trim()
    );

    // Verificar errores
    if (error) {
      this.mensaje = error.message;
      return;
    }

    // Verifica si el correo ya existe
    if (data.user && data.user.identities?.length === 0) {
      this.mensaje = 'Ya existe una cuenta con este correo';
      return;
    }

    // Mensaje exitoso
    this.mensaje = 'Usuario registrado correctamente';
  }

  // Método para validar correo electrónico
  validarCorreo(email: string): boolean {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailRegex.test(email);
  }

}