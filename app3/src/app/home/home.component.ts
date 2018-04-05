import { Component, OnInit, ViewChild } from '@angular/core';
import { Autenticacao } from '../autenticao.service';
import { PublicacoesComponent } from './publicacoes/publicacoes.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('publicacoes')
  public publicacoesComponent: PublicacoesComponent;

  constructor(
    private autenticacao: Autenticacao
  ) { }

  ngOnInit() {
  }

  sair() {
    this.autenticacao.loggout();
  }

  public atualizarTimeLine(): void {
    console.log('atualizar timeline');
    this.publicacoesComponent.atualizarTimeLine();
  }
}
