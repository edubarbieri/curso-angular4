import { Injectable } from '@angular/core';
import Oferta from './shared/oferta.model';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/retry';

import { URL_API } from './app.api';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class OfertasService {

    constructor(private httpClient: HttpClient) { }

    public getOfertas(): Promise<Oferta[]> {
        return this.httpClient.get<Oferta[]>(`${URL_API}/ofertas/?destaque=true`).toPromise();
        // return new Promise((resolve, reject) => {
        //     this.httpClient.get<Oferta[]>('http://localhost:3000/ofertas/').subscribe(resp => {
        //         resolve(resp);
        //     });
        // });
    }

    public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
        return this.httpClient.get<Oferta[]>(`${URL_API}/ofertas/?categoria=${categoria}`).toPromise();
    }

    public getOferta(id: string): Promise<Oferta> {
        return this.httpClient.get<Oferta>(`${URL_API}/ofertas/${id}`).toPromise();
    }

    public getComoUsarOfertaPorId(id: string): Promise<string> {
        return this.httpClient.get<any>(`${URL_API}/como-usar/${id}`)
            .toPromise()
            .then((value: any) => {
                return value['descricao'];
            });
    }
    public getOndeFicaPorId(id: string): Promise<string> {
        return this.httpClient.get<any>(`${URL_API}/onde-fica/${id}`)
            .toPromise()
            .then((value: any) => {
                return value['descricao'];
            });
    }

    public pesquisaOfertas(termo: string): Observable<Oferta[]> {
        return this.httpClient.get<Oferta[]>(`${URL_API}/ofertas?descricao_oferta_like=${termo}`)
        .retry(10);
    }
}
