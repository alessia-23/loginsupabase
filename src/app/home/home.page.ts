import { Component } from '@angular/core';
import { Router } from '@angular/router';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonIcon,
  IonCard,
  IonCardContent,
  IonList,
  IonItem,
  IonLabel
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import {
  logOutOutline,
  searchOutline,
  cameraOutline,
  personOutline,
  sparklesOutline
} from 'ionicons/icons';

import { SupabaseService } from '../services/supabase.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonIcon,
    IonCard,
    IonCardContent,
    IonList,
    IonItem,
    IonLabel
  ]
})
export class HomePage {

  constructor(
    private supabaseService: SupabaseService,
    private router: Router
  ) {
    addIcons({
      logOutOutline,
      searchOutline,
      cameraOutline,
      personOutline,
      sparklesOutline
    });
  }

  irCatalogo() {
    this.router.navigate(['/tabs/catalogo']);
  }

  irCamara() {
    this.router.navigate(['/tabs/camara']);
  }

  irPerfil() {
    this.router.navigate(['/tabs/perfil']);
  }

  async cerrarSesion() {
    const { error } = await this.supabaseService.logout();

    if (error) {
      console.log('Error al cerrar sesión: ', error.message);
      return;
    }

    this.router.navigate(['/login']);
  }
}