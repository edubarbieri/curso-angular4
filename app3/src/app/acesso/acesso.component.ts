import {Component, OnInit} from '@angular/core';
import {trigger, state, style, transition, animate, keyframes} from '@angular/animations';

@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrls: ['./acesso.component.css'],
  animations: [
    trigger('animacao-banner', [
      state('criado', style({
        opacity: 1
      })),
      transition('void => criado', [
        style({
          opacity: 0,
          transform: 'translate(-50px, 0px)'
        }),
        animate('500ms 0s ease-in-out')
      ])
    ]),
    trigger('animacao-painel', [
      state('criado', style({
        opacity: 1
      })),
      transition('void => criado', [
        style({
          opacity: 0,
          transform: 'translate(50px, 0px)'
        }),
        animate('1500ms 0s ease-in-out', keyframes([
          style({offset: 0.50, opacity: 1, transform: 'translateX(0)'}),
          style({offset: 0.86, opacity: 1, transform: 'translateX(0)'}),
        ]))
      ]),
      state('error', style({
        opacity: 1
      })),
      transition('criado => error', [
        animate('400ms 0s ease-in-out', keyframes([
          style({offset: 0.0, opacity: 1, transform: 'translateY(-10px)'}),
          style({offset: 0.20, opacity: 1, transform: 'translateY(10px)'}),
          style({offset: 0.42, opacity: 1, transform: 'translateY(-10px)'}),
          style({offset: 0.64, opacity: 1, transform: 'translateY(10px)'}),
          style({offset: 0.86, opacity: 1, transform: 'translateY(-10px)'}),
          style({offset: 0.98, opacity: 1, transform: 'translateY(10px)'}),
        ]))
      ])
    ])
  ]
})
export class AcessoComponent implements OnInit {

  public estadoBanner = 'criado';
  public estadoPainel = 'criado';
  public cadastro = false;

  constructor() {
  }

  ngOnInit() {
  }

  inicioAnimacao() {
    console.log('Inicio animação');
  }
  fimAnimacao() {
    console.log('Fim animação');
  }

  onErrorPainel(){
    this.estadoPainel = 'error'
    setTimeout(() =>{
      this.estadoPainel = 'criado';
    }, 1000)
  }
}
