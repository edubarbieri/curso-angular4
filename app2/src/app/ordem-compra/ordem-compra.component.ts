import { Component, OnInit } from '@angular/core';
import { componentFactoryName } from '@angular/compiler';
import { OrdemCompraService } from '../ordem-compra.service';
import { Pedido } from '../shared/pedido.model';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [
    OrdemCompraService
  ]
})
export class OrdemCompraComponent implements OnInit {

  public endereco = '';
  public numero = '';
  public complemento = '';
  public formaPagamento = '';


  // controle de validação

  public enderecoValido: boolean;
  public numeroValido: boolean;
  public complementoValido: boolean;
  public formaPagamentoValido: boolean;

  // stados pristine
  public enderecoPrimitivo = true;
  public numeroPrimitivo = true;
  public complementoPrimitivo = true;
  public formaPagamentoPrimitivo = true;

  // controlar boatão confirmar compra
  public formeStado = false;

  public idPedidoCompra: number;

  constructor(
    private odemCompraService: OrdemCompraService
  ) { }

  ngOnInit() {
  }

  atualizaEndereco(endereco: string) {
    this.endereco = endereco;
    this.enderecoPrimitivo = false;

    if (this.endereco.length > 0) {
      this.enderecoValido = true;
    } else {
      this.enderecoValido = false;
    }
  }

  atualizaNumero(numero: string) {
    this.numero = numero;
    this.numeroPrimitivo = false;
    if (this.numero.length > 0) {
      this.numeroValido = true;
    } else {
      this.numeroValido = false;
    }
  }

  atualizaComplemento(complemento: string) {
    this.complemento = complemento;
    this.complementoPrimitivo = false;
    if (this.complemento.length > 0) {
      this.complementoValido = true;
    }
  }

  atualizaFormaPagamento(formaPagamento: string) {
    this.formaPagamento = formaPagamento;
    this.formaPagamentoPrimitivo = false;
    if (this.formaPagamento.length > 0) {
      this.formaPagamentoValido = true;
    } else {
      this.complementoValido = false;
    }
  }

  confirmarCompra(): void {
    const pedido = new Pedido(this.endereco,
      this.numero, this.complemento, this.formaPagamento);
    this.odemCompraService.efetivarCompra(pedido).subscribe((resp: any) => {
      console.log('Response', resp);
      this.idPedidoCompra = resp.id;
    },
      (error: any) => {
        console.error(`Error`, error);
        alert('Erro ao efetuar operação. Por favor tente novamento');
      });
  }

}


