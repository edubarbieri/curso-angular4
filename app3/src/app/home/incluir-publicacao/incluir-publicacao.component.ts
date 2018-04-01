import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Bd } from '../../bd.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-incluir-publicacao',
  templateUrl: './incluir-publicacao.component.html',
  styleUrls: ['./incluir-publicacao.component.css']
})
export class IncluirPublicacaoComponent implements OnInit {

  public formulario = new FormGroup({
    'titulo': new FormControl(null)
  });
  constructor(private bd: Bd) { }

  private userUid: string;

  ngOnInit() {
    firebase.auth().onAuthStateChanged((user) =>{
      this.userUid = user.uid;
    });
  }

  reset(){
    this.formulario.reset();
  }

  publicar(){
    if(this.formulario.invalid){
      return;
    }

    console.log('Incluir post: ', this.formulario.value);
    this.bd.publicar(this.userUid, this.formulario.value);

  }

}
