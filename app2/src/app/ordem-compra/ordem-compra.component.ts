import { Component, OnInit, ViewChild } from '@angular/core';
import { componentFactoryName } from '@angular/compiler';
import { OrdemCompraService } from '../ordem-compra.service';
import { Pedido } from '../shared/pedido.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [
    OrdemCompraService
  ]
})
export class OrdemCompraComponent implements OnInit {

  @ViewChild('formulario')
  public formulario: NgForm;

  public idPedido: number;

  constructor(
    private ordemCompraService: OrdemCompraService
  ) { }

  ngOnInit() {
  }

  public confirmarCompra(): void {
    if (!this.formulario.valid) {
      console.log('Formulario invalido');
      return;
    }
    console.log(this.formulario);
    const formValue = this.formulario.value;
    const pedido = new Pedido(formValue.endereco,
      formValue.numero, formValue.complemento, formValue.formaPagamento
    );
    this.ordemCompraService.efetivarCompra(pedido)
      .subscribe((response: any) => {
        console.log('Response', response);
        this.idPedido = response.id;
      });
  }


}


