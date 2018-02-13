import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import Coracao from '../shared/coracao.model';
@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {

  public coracoes: Coracao[] = [
    new Coracao(false),
    new Coracao(false),
    new Coracao(false)
  ];

  @Input()
  public tentativas = 0;

  constructor() {
  }

  ngOnInit() {
    this.updateCorracoes();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['tentativas']) {
      this.updateCorracoes();
    }
  }
  private updateCorracoes() {
    this.coracoes.forEach((value: Coracao) => {
      value.cheio = false;
    });
    for (let i = 1; i <= this.tentativas; i++) {
      this.coracoes[this.coracoes.length - i].cheio = true;
    }
  }

}
