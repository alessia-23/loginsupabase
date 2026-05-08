import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Preferences } from '@capacitor/preferences';

import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonCard,
  IonCardContent,
  IonButton,
  IonInput,
  IonItem,
  IonLabel
} from '@ionic/angular/standalone';

import { SupabaseService } from '../../services/supabase.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonCard,
    IonCardContent,
    IonButton,
    IonInput,
    IonItem,
    IonLabel
  ]
})
export class PerfilPage implements OnInit {

  email = '';

  nombre = 'Usuario';
  apellido = '';
  pais = '';
  edad: number | null = null;

  nombreTemporal = '';
  apellidoTemporal = '';
  paisTemporal = '';
  edadTemporal: number | null = null;

  editando = false;

  constructor(private supabaseService: SupabaseService) { }

  async ngOnInit() {
    const { data } = await this.supabaseService.getUser();

    if (data.user?.email) {
      this.email = data.user.email;
    }

    const perfilGuardado = await Preferences.get({
      key: 'perfil_local'
    });

    if (perfilGuardado.value) {
      const perfil = JSON.parse(perfilGuardado.value);

      this.nombre = perfil.nombre || 'Usuario';
      this.apellido = perfil.apellido || '';
      this.pais = perfil.pais || '';
      this.edad = perfil.edad || null;
    }
  }

  editarPerfil() {
    this.nombreTemporal = this.nombre;
    this.apellidoTemporal = this.apellido;
    this.paisTemporal = this.pais;
    this.edadTemporal = this.edad;
    this.editando = true;
  }

  async guardarPerfil() {
    if (!this.nombreTemporal.trim()) {
      return;
    }

    this.nombre = this.nombreTemporal.trim();
    this.apellido = this.apellidoTemporal.trim();
    this.pais = this.paisTemporal.trim();
    this.edad = this.edadTemporal;

    const perfil = {
      nombre: this.nombre,
      apellido: this.apellido,
      pais: this.pais,
      edad: this.edad
    };

    await Preferences.set({
      key: 'perfil_local',
      value: JSON.stringify(perfil)
    });

    this.editando = false;
  }

  cancelarEdicion() {
    this.editando = false;
  }

}