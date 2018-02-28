import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OfertasService } from '../ofertas.service';
import Oferta from '../shared/oferta.model';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css']
})
export class OfertaComponent implements OnInit, OnDestroy {

  public oferta: Oferta = new Oferta();

  public currentImg = '';

  constructor(
    private route: ActivatedRoute,
    private ofertaService: OfertasService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.ofertaService.getOferta(params.id).then((value: Oferta) => {
        this.oferta = value;
        this.currentImg = value.imagens[0]['url'];
      });
    });
  }

  ngOnDestroy() {
  }

  changeImg(src: string) {
    this.currentImg = src;
  }

}
