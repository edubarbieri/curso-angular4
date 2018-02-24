import { Injectable } from '@angular/core';
import Oferta from './shared/oferta.model';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise'
@Injectable()
export class OfertasService {

    constructor(private httpClient: HttpClient) { }

    public getOfertas(): Promise<Oferta[]> {
        return this.httpClient.get<Oferta[]>('http://localhost:3000/ofertas/?destaque=true').toPromise();
        // return new Promise((resolve, reject) => {
        //     this.httpClient.get<Oferta[]>('http://localhost:3000/ofertas/').subscribe(resp => {
        //         resolve(resp);
        //     });
        // });
    }
}
