import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Autenticacao } from '../../autenticao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formulario = new FormGroup({
    'email': new FormControl(null, [
      Validators.required, Validators.email
    ]),
    'senha': new FormControl(null, [
      Validators.required,
      Validators.minLength(6)
    ])
  });
  @Output()
  public clickCadastro = new EventEmitter();

  @Output()
  public onError = new EventEmitter();

  public errorMessage: string;

  constructor(
    private autenticacao: Autenticacao
  ) { }

  ngOnInit() {
  }

  public login(): void {
    Object.keys(this.formulario.controls).forEach(field => {
      const control = this.formulario.get(field);
      control.markAsTouched({ onlySelf: true });
    });
    if (this.formulario.invalid) {
      return;
    }

    this.autenticacao.autenticar(this.formulario.value.email, this.formulario.value.senha)
      .catch((error: string) => {
        console.log(error);
        switch (error) {
          case 'auth/user-not-found':
            this.errorMessage = 'Não existe usuário cadastrado com o e-mail informado. Verifique o e-mail e tente novamente.'
            break;
          case 'auth/wrong-password':
            this.errorMessage = 'Senha informada inválida. Verifique senha e tente novamente.'
            break;
          default:
            this.errorMessage = 'Usuário e(ou) senha inválido(s). Verifique os dados informados e tente novamente.'
            break;
        }
        this.onError.emit();
      });
  }

}
