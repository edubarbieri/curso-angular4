import { Pedido } from './shared/pedido.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { URL_API } from './app.api';

@Injectable()
export class OrdemCompraService {


    constructor(private httpClient: HttpClient) { }
    public efetivarCompra(pedido: Pedido): Observable<any> {
        console.log('Efetivar compra', pedido);
        return this.httpClient.post(`${URL_API}/pedidos`, pedido);
    }
}
