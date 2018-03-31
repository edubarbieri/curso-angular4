import { Usuario } from "./acesso/usuario.model";
import * as firebase from 'firebase';
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable()
export class Autenticacao {

    public tokenId: string;
    constructor(
        private router: Router
    ) { }

    public cadastrarUsuario(user: Usuario): Promise<any> {
        console.log('cadastrarUsuario: ', user)
        return firebase.auth()
            .createUserWithEmailAndPassword(user.email, user.senha)
            .then((response: any) => {
                console.log('Success create user');
                delete user.senha;
                firebase.database().ref(`user_detail/${response.uid}`)
                    .set(user)
            })
            .catch((error: any) => {
                console.log('Error: ', error);
            });
    }

    public autenticar(email: string, senha: string): Promise<any> {
        return new Promise((resolve, reject) => {
            firebase.auth().signInWithEmailAndPassword(email, senha)
                .then((response: any) => {
                    console.log('Success: ', response);
                    firebase.auth().currentUser.getIdToken().then((idToken: string) => {
                        this.tokenId = idToken;
                        localStorage.setItem('token_id', idToken);
                        this.router.navigateByUrl('/home')
                        resolve();
                    });
                })
                .catch((error: any) => {
                    reject(error.code);
                });
        });

    }


    public isLogged(): boolean {
        if (this.tokenId === undefined) {
            const idToken = localStorage.getItem('token_id');
            if (idToken) {
                this.tokenId = idToken;
            }
        }
        if(this.tokenId === undefined){
            this.router.navigateByUrl('/')
        }
        return this.tokenId !== undefined;
    }

    public loggout(){
        firebase.auth().signOut().then(()=>{
            localStorage.removeItem('token_id');
            this.tokenId = undefined;
            
        })
    }
}