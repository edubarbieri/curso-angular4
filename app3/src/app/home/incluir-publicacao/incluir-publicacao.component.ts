import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Bd } from '../../bd.service';
import * as firebase from 'firebase';
import { Progresso } from '../../progresso.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/takeUntil';
import { Subject } from 'rxjs/Subject';

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


  public progressoPublicacao = 'pendente';
  public porcentagemUpload = 0;

  @Output()
  public novaPublicao = new EventEmitter();

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
    this.bd.publicar(this.userUid, {
      titulo: this.formulario.value.titulo,
      imagem: this.imagem
    });

    const acompanhamentoUploado = Observable.interval(100);
    const continua = new Subject();
    continua.next(true);
    this.progressoPublicacao = 'andamento';
    this.porcentagemUpload = 0;
    acompanhamentoUploado
      .takeUntil(continua)
      .subscribe(() => {
        // console.log('Status', this.progresso.status);
        // console.log('Estados', this.progresso.estado);
        if (this.progresso.estado) {
          this.porcentagemUpload = Math.round((this.progresso.estado.bytesTransferred / this.progresso.estado.totalBytes) * 100);
        }
        if (this.progresso.status === 'concluido') {
          this.progressoPublicacao = 'concluido';
          continua.next(false);
          this.novaPublicao.emit('');
        }
      });

  }

  public preparaImgUpload(event: Event): void {
    this.imagem = (<HTMLInputElement>event.target).files[0];
  }

}
