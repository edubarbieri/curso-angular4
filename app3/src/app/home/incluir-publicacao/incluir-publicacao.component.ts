import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Bd } from '../../bd.service';
import * as firebase from 'firebase';
import { Progresso } from '../../progresso.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Subject } from 'rxjs/Rx';

@Component({
  selector: 'app-incluir-publicacao',
  templateUrl: './incluir-publicacao.component.html',
  styleUrls: ['./incluir-publicacao.component.css']
})
export class IncluirPublicacaoComponent implements OnInit {

  public formulario = new FormGroup({
    'titulo': new FormControl(null, [
      Validators.required, Validators.minLength(5)
    ])
  });

  constructor(private bd: Bd,
    private progresso: Progresso) {
  }

  private userUid: string;

  private imagem: any;

  ngOnInit() {
    firebase.auth().onAuthStateChanged((user) => {
      this.userUid = user.uid;
    });
  }

  reset() {
    this.formulario.reset();
  }

  publicar() {
    if (this.formulario.invalid || !this.imagem) {
      return;
    }

    console.log('Incluir post: ', this.formulario.value);
    this.bd.publicar({
      uid: this.userUid,
      titulo: this.formulario.value.titulo,
      imagem: this.imagem
    });

    const acompanhamentoUploado = Observable.interval(1500);
    const continua = new Subject();
    continua.next(true);
    acompanhamentoUploado
      .takeUntil(continua)
      .subscribe(() => {
        console.log('Status', this.progresso.status);
        console.log('Estados', this.progresso.estado);

        if (this.progresso.status === 'concluido') {
          continua.next(false);
        }
      });

  }

  public preparaImgUpload(event: Event): void {
    this.imagem = (<HTMLInputElement>event.target).files[0];
  }

}
