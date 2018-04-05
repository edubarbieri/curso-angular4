import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import construct = Reflect.construct;
import { Progresso } from './progresso.service';

@Injectable()
export class Bd {

  consultarPublicacoes(uid: string): Promise<any> {
    return new Promise((resolve, reject) => {
      firebase.database().ref(`publications/${uid}`)
        .orderByKey()
        .once('value')
        .then((snapshot: any) => {

          const publicacoes: any[] = [];
          snapshot.forEach((childSnapshot: any) => {
            const publicacao = childSnapshot.val();
            publicacao.id = childSnapshot.key;
            publicacoes.push(publicacao);
          });
          return publicacoes.reverse();
        }).then((publicacoes: any[]) => {
          publicacoes.forEach((publicacao: any) => {
            // consultar a url da image
            firebase.storage()
              .ref()
              .child(`imagens/${publicacao.id}`)
              .getDownloadURL()
              .then((url: string) => {
                publicacao.urlImagem = url;
                // consulta nome de usuario
                firebase.database().ref(`user_detail/${uid}`)
                  .once('value')
                  .then((snapshotUser: any) => {
                    publicacao.nomeUsuario = snapshotUser.val().nomeCompleto;
                  });
              });
          });
          resolve(publicacoes);
        })
        ;
    });
  }
  constructor(private progresso: Progresso) {
  }

  public publicar(uid: string, publicacao: any): void {

    firebase.database().ref(`publications/${uid}`)
      .push(publicacao).then((resp: any) => {
        const nomeImagem = resp.key;
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
      });
  }
}
