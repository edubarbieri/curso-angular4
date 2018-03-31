import { Component, OnInit } from '@angular/core';
import { Autenticacao } from '../autenticao.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private autenticacao: Autenticacao
  ) { }

  ngOnInit() {
  }

  sair(){
    this.autenticacao.loggout();
  }
}