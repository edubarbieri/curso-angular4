import { Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';
import { Autenticacao } from './autenticao.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(private autenticacao: Autenticacao){

  }
  ngOnInit(): void{
    const config = {
      apiKey: "AIzaSyBb1Pbe-kBhx7voVKMBfQeZIYKOuXWQctw",
      authDomain: "jta-integram-clone.firebaseapp.com",
      databaseURL: "https://jta-integram-clone.firebaseio.com",
      projectId: "jta-integram-clone",
      storageBucket: "jta-integram-clone.appspot.com",
      messagingSenderId: "103449590613"
    };
    firebase.initializeApp(config);
  }
}
