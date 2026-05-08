import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AnimeService {

    private apiUrl = 'https://api.jikan.moe/v4';

    constructor(private http: HttpClient) { }

    // Obtener animes populares
    getTopAnimes() {
        return this.http.get(`${this.apiUrl}/top/anime`);
    }

    // Buscar anime
    searchAnime(nombre: string) {
        return this.http.get(
            `${this.apiUrl}/anime?q=${nombre}`
        );
    }

    // Obtener detalle
    getAnimeById(id: number) {
        return this.http.get(
            `${this.apiUrl}/anime/${id}`
        );
    }
}