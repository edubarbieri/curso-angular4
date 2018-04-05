import { Component, OnInit } from '@angular/core';
import { Bd } from '../../bd.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-publicacoes',
  templateUrl: './publicacoes.component.html',
  styleUrls: ['./publicacoes.component.css']
})
export class PublicacoesComponent implements OnInit {

  private uid: string;
  public publicacoes: any;
  constructor(private bd: Bd) { }


  ngOnInit() {
    firebase.auth().onAuthStateChanged((user) => {
      this.uid = user.uid;
      this.atualizarTimeLine();
    });
  }

  public atualizarTimeLine(): void {
    this.bd.consultarPublicacoes(this.uid).then((publicacoes: any) => {
      this.publicacoes = publicacoes;
    });
  }

}
