import {Component, OnInit} from '@angular/core';
import {Imagem} from './imagem.model';
import {trigger, state, style, transition, animate} from '@angular/animations';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  animations: [
    trigger('banner', [
      state('escondido', style({
        opacity: 0
      })),
      state('visivel', style({
        opacity: 1
      })),
      transition('escondido <=> visivel', animate('2s ease-in'))
    ])
  ]
})
export class BannerComponent implements OnInit {

  public estado = 'escondido';

  public imagens: Imagem[] = [
    {estado: 'visivel', url: '/assets/banner-acesso/img_1.png'},
    {estado: 'escondido', url: '/assets/banner-acesso/img_2.png'},
    {estado: 'escondido', url: '/assets/banner-acesso/img_3.png'},
    {estado: 'escondido', url: '/assets/banner-acesso/img_4.png'},
    {estado: 'escondido', url: '/assets/banner-acesso/img_5.png'}
  ];

  constructor() {
  }

  ngOnInit() {
    setInterval(() => this.rotacao(), 3000);
  }

  public rotacao(): void {

    for (let index = 0; index < this.imagens.length; index++) {
      const element = this.imagens[index];
      if (element.estado === 'visivel') {
        element.estado = 'escondido';
        const nextIdx = (index + 1 < this.imagens.length) ? (index + 1) : 0;
        this.imagens[nextIdx].estado = 'visivel';
        break;
      }

    }
  }

}
