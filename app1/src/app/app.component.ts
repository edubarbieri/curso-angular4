import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public jogoEmAndamento = true;
  public tipoEcerramento: string;
  public encerrarJogo(tipo: string): void {
    this.jogoEmAndamento = false;
    this.tipoEcerramento = tipo;
  }

  public resetJogo(): void {
    this.jogoEmAndamento = true;
    this.tipoEcerramento = undefined;
  }
}
