import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OfertasService } from '../../ofertas.service';

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css']
})
export class ComoUsarComponent implements OnInit {

  public comoUsar = '';
  constructor(
    private route: ActivatedRoute,
    private ofertaService: OfertasService
  ) { }

  ngOnInit() {
    this.route.parent.params.subscribe((params: Params) => {
      this.ofertaService.getComoUsarOfertaPorId(params.id).then((value: string) => {
        this.comoUsar = value;
      });
    });
  }


}
