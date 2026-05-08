import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonCard,
  IonCardContent,
  IonInput,
  IonItem,
  IonButton,
  IonSpinner
} from '@ionic/angular/standalone';

import { AnimeService } from '../../services/anime.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonCard,
    IonCardContent,
    IonInput,
    IonItem,
    IonButton,
    IonSpinner
  ]
})

export class CatalogoPage implements OnInit {

  animes: any[] = [];
  busqueda = '';
  loading = false;

  constructor(private animeService: AnimeService) { }

  ngOnInit() {
    this.obtenerAnimes();
  }

  obtenerAnimes() {

    this.loading = true;

    this.animeService.getTopAnimes().subscribe({
      next: (respuesta: any) => {

        this.animes = respuesta.data;

        this.loading = false;
      },

      error: () => {
        this.loading = false;
      }
    });
  }

  buscarAnime() {

    if (!this.busqueda.trim()) {
      this.obtenerAnimes();
      return;
    }

    this.loading = true;

    this.animeService.searchAnime(this.busqueda)
      .subscribe({

        next: (respuesta: any) => {

          this.animes = respuesta.data;

          this.loading = false;
        },

        error: () => {
          this.loading = false;
        }
      });
  }

}