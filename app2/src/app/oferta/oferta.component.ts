import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from '../ofertas.service';
import Oferta from '../shared/oferta.model';
@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css']
})
export class OfertaComponent implements OnInit {

  public oferta: Oferta = new Oferta();

  public currentImg = '';

  constructor(
    private route: ActivatedRoute,
    private ofertaService: OfertasService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.ofertaService.getOferta(id).then((value: Oferta) => {
      this.oferta = value;
      this.currentImg = value.imagens[0]['url'];
      console.log(value);
    });

    console.log('ID acessado: ', id);
  }

  changeImg(src: string) {
    this.currentImg = src;
  }

}
