import { Component, OnInit } from '@angular/core';
import { OrdemCompraService } from '../ordem-compra.service';
import { Pedido } from '../shared/pedido.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CarrinhoService } from '../carrinho.service';
import { ItemCarrinho } from '../shared/item-carrinho.model';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [OrdemCompraService]
})
export class OrdemCompraComponent implements OnInit {

  public formulario = new FormGroup({
    'endereco': new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(120)
    ]),
    'numero': new FormControl(null, [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(6)
    ]),
    'complemento': new FormControl(null),
    'formaPagamento': new FormControl(null, [
      Validators.required
    ])
  });

  public idPedidoCompra: number;
  public items: ItemCarrinho[];

  constructor(private ordemCompraService: OrdemCompraService,
              public carrinhoService: CarrinhoService) { }

  ngOnInit() {
    console.log('Itens do carrinho: ', this.carrinhoService.exibirItems());
    this.loadCart();
  }
  private loadCart() {
    this.items = this.carrinhoService.getItems();
  }

  public get total(): number {
    let vlrTotal = 0;
    for (const item of this.items) {
        vlrTotal += item.valor * item.quantidade;
    }
    return vlrTotal;
}

  public confirmarCompra(): void {
    if (this.items.length <= 0) {
      alert('Voce não possui itens no carrinho.');
      return;
    }
    if (this.formulario.valid) {
      const pedido = new Pedido(
        this.formulario.value.endereco,
        this.formulario.value.numero,
        this.formulario.value.complemento,
        this.formulario.value.formaPagamento,
        this.items,
        this.carrinhoService.total
      );
      console.log(pedido);
      this.ordemCompraService.efetivarCompra(pedido)
        .subscribe((resp: any) => {
          this.idPedidoCompra = resp.id;
          console.log(this.idPedidoCompra);
          this.carrinhoService.clearCart();
        });
    }
  }
}
