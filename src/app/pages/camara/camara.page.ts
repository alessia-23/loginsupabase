import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonCard,
  IonCardContent
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { cameraOutline } from 'ionicons/icons';

import { PhotoService } from '../../services/photo.service';

@Component({
  selector: 'app-camara',
  templateUrl: './camara.page.html',
  styleUrls: ['./camara.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButton,
    IonIcon,
    IonGrid,
    IonRow,
    IonCol,
    IonImg,
    IonCard,
    IonCardContent
  ]
})
export class CamaraPage implements OnInit {

  constructor(public photoService: PhotoService) {
    addIcons({
      cameraOutline
    });
  }

  async ngOnInit() {
    await this.photoService.loadSaved();
  }

  async tomarFoto() {
    await this.photoService.addNewToGallery();
  }

}