import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Usuario } from '../usuario.model';
import { Autenticacao } from '../../autenticao.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  public formulario = new FormGroup({
    'email': new FormControl(null, [
      Validators.required,
      Validators.email
    ]),
    'nomeCompleto': new FormControl(null, [
      Validators.required,
      Validators.min(5),
      Validators.maxLength(100)
    ]),
    'nomeUsuario': new FormControl(null, [
      Validators.required,
      Validators.maxLength(30)
    ]),
    'senha': new FormControl(null, [
      Validators.required,
      Validators.minLength(6)
    ])
  })

  @Output()
  public clickLogin = new EventEmitter();

  @Output()
  public onError = new EventEmitter();

  public errorMessage : string;

  constructor(
    private autenticacao: Autenticacao
  ) { }

  ngOnInit() {
  }

  public cadastrarUsuario(): void {
    Object.keys(this.formulario.controls).forEach(field => {
      const control = this.formulario.get(field);
      control.markAsTouched({ onlySelf: true });
    });
    if (this.formulario.invalid) {
      console.log('Formmulário invalido!');
      return;
    }
    let usuario = <Usuario>this.formulario.value;
    this.autenticacao.cadastrarUsuario(usuario)
      .then((resp) => {
        this.clickLogin.emit();
      }).catch((error: any) =>{
        this.errorMessage = 'Não foi possivel realizar o cadastro.Por favor, revise os dados informados e tente novamente.'
        this.onError.emit();
      });
  }

}
