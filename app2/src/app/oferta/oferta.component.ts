import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { OfertasService } from '../ofertas.service';
import Oferta from '../shared/oferta.model';
import { CarrinhoService } from '../carrinho.service';

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
    private ofertaService: OfertasService,
    public carrinhoService: CarrinhoService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.ofertaService.getOferta(params.id).then((value: Oferta) => {
        this.oferta = value;
        this.currentImg = value.imagens[0]['url'];
      });
      window.scrollTo(0, 0);
    });

    console.log('Itens do carrinho: Order de compras', this.carrinhoService.exibirItems());
  }

  ngOnDestroy() {
  }

  changeImg(src: string) {
    this.currentImg = src;
  }

  addItemToCart() {
    this.carrinhoService.addItemToCart(this.oferta);
    console.log('Itens do carrinho: Order de compras', this.carrinhoService.exibirItems());
    this.router.navigateByUrl('/ordem-compra');
  }

}
