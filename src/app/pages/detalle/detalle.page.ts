import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import translate from 'translate';

import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonCard,
  IonCardContent,
  IonButton,
  IonSpinner,
  IonBackButton,
  IonButtons
} from '@ionic/angular/standalone';

import { AnimeService } from '../../services/anime.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonCard,
    IonCardContent,
    IonButton,
    IonSpinner,
    IonBackButton,
    IonButtons
  ]
})
export class DetallePage implements OnInit {

  anime: any;
  loading = false;

  // Aquí se guardará la sinopsis traducida
  sinopsisTraducida = '';

  constructor(
    private route: ActivatedRoute,
    private animeService: AnimeService
  ) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.obtenerDetalle(id);
  }

  obtenerDetalle(id: number) {
    this.loading = true;

    this.animeService.getAnimeById(id).subscribe({
      next: async (respuesta: any) => {

        this.anime = respuesta.data;

        try {
          // Traduce la sinopsis al español
          this.sinopsisTraducida = await translate(
            this.anime.synopsis || 'Sin sinopsis disponible',
            {
              to: 'es'
            }
          );
        } catch (error) {
          // Si falla la traducción, muestra la sinopsis original
          this.sinopsisTraducida =
            this.anime.synopsis || 'Sin sinopsis disponible';
        }

        this.loading = false;
      },

      error: () => {
        this.loading = false;
      }
    });
  }

}