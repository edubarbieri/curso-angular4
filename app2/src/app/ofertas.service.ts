import { Injectable } from '@angular/core';
import Oferta from './shared/oferta.model';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

import {URL_API} from './app.api';
@Injectable()
export class OfertasService {

    constructor(private httpClient: HttpClient) { }

    public getOfertas(): Promise<Oferta[]> {
        return this.httpClient.get<Oferta[]>(`${URL_API}/?destaque=true`).toPromise();
        // return new Promise((resolve, reject) => {
        //     this.httpClient.get<Oferta[]>('http://localhost:3000/ofertas/').subscribe(resp => {
        //         resolve(resp);
        //     });
        // });
    }

    public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
        return this.httpClient.get<Oferta[]>(`${URL_API}/?categoria=${categoria}`).toPromise();
    }

    public getOferta(id: string): Promise<Oferta> {
        return this.httpClient.get<Oferta>(`${URL_API}/${id}`).toPromise();
    }
}
