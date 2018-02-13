"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = __importDefault(require("./Carro"));
var Pessoa_1 = __importDefault(require("./Pessoa"));
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
// Criar carros
var carroA = new Carro_1.default('Astra', 4);
var carroB = new Carro_1.default('Corolla', 4);
var carroC = new Carro_1.default('Gol', 2);
//montar lista de carros
var listaDeCarros = [carroA, carroB, carroC];
var concessonaria = new Concessionaria_1.default('Passo Fundo', listaDeCarros);
console.log(concessonaria.mostrarListaDeCarros());
//Cliente comprar carro
var pessoa = new Pessoa_1.default('Eduardo', 'Astra');
console.log('Carro preferido:', pessoa.dizerCarroPreferido());
concessonaria.mostrarListaDeCarros().forEach(function (carro) {
    if (carro['modelo'] === pessoa.dizerCarroPreferido()) {
        pessoa.comprarCarro(carro);
    }
});
console.log('Pessoa:', pessoa.dizerCarroQueTem());
