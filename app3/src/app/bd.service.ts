import * as firebase from 'firebase';
import {Injectable} from '@angular/core';
import construct = Reflect.construct;
import {Progresso} from './progresso.service';

@Injectable()
export class Bd {

  constructor(private progresso: Progresso) {
  }

  public publicar(publicacao: any): void {
    /*
    firebase.database().ref(`publications/${publicacao.uid}`)
      .push(publicacao);
      */
    const nomeImagem = Date.now();
    console.log('incluir nova imagem', publicacao, nomeImagem);
    firebase.storage().ref()
      .child(`imagens/${nomeImagem}`)
      .put(publicacao.imagem)
      .on(firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot: any) => {
          this.progresso.status = 'andamento';
          this.progresso.estado = snapshot;
        },
        (error: any) => {
          this.progresso.status = 'error';
        },
        () => {
          this.progresso.status = 'concluido';
        });

  }
}
