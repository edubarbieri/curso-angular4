import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import Frase from '../shared/frase.model';
import { FRASES } from '../mock/frases.mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnDestroy {

  public frases: Frase[] = FRASES;
  public instrucao = 'Traduza a frase:';
  public resposta = '';
  public rodada = 0;
  public rodadaFrase: Frase;

  public progresso = 0;
  public tentativas = 3;

  @Output()
  public encerrarJogo: EventEmitter<string> = new EventEmitter();

  constructor() {
    this.atualizaRodada();
  }

  ngOnInit() {
  }
  ngOnDestroy() {
    console.log(`Componente painel foi destruido`);
  }
  atualizaResposta(event: Event): void {
    this.resposta = (<HTMLInputElement>event.target).value;
  }

  private nextFrase(): void {
    if (this.rodada + 1 < this.frases.length) {
      this.rodada++;
      this.atualizaRodada();
      this.progresso = (this.rodada * 100) / this.frases.length;
    } else {
      this.progresso = 100;
      alert('Conclui com sucesso as traduções!');
      this.reset('vitoria');
    }
  }
  private atualizaRodada() {
    this.rodadaFrase = this.frases[this.rodada];
  }

  verificarResposta(): void {
    if (this.resposta && this.rodadaFrase.frasePtBr.toLocaleLowerCase() === this.resposta.toLocaleLowerCase()) {
      alert('Tradução esta correta');
      this.nextFrase();
      this.resposta = '';
    } else {
      alert('Resposta errada!');
      this.tentativas--;
      if (this.tentativas === -1) {
        alert('Voce perdeu todas as tentativas');
        this.reset('derrota');
      }
    }
  }

  reset(tipo: string) {
    this.encerrarJogo.emit(tipo);
  }
}
