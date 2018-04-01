import * as firebase from 'firebase';

export class Bd{
    public publicar(uid: string, publicacao: any): void {
        console.log(uid, publicacao);
        firebase.database().ref(`publications/${uid}`)
        .push(publicacao);
    }
}