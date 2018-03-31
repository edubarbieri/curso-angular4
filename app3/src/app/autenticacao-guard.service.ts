import {CanActivate} from '@angular/router';
import { Injectable } from '@angular/core';
import { Autenticacao } from './autenticao.service';

@Injectable()
export class AutenticacaoGuard implements CanActivate {
    constructor(private autenticacao: Autenticacao){}
    canActivate(): boolean{
        return this.autenticacao.isLogged();
    }
}