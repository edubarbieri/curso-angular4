import Carro, { qualquerCoisa as qCoisa} from './Carro';
import Pessoa from './Pessoa';
import Concessionaria from './Concessionaria';

// Criar carros
let carroA = new Carro('Astra', 4);
let carroB = new Carro('Corolla', 4);
let carroC = new Carro('Gol', 2);



//montar lista de carros

let listaDeCarros: Carro[] = [carroA, carroB, carroC];

let concessonaria = new Concessionaria('Passo Fundo', listaDeCarros);

console.log(concessonaria.mostrarListaDeCarros());

//Cliente comprar carro

let pessoa = new Pessoa('Eduardo', 'Astra');

console.log('Carro preferido:', pessoa.dizerCarroPreferido());


concessonaria.mostrarListaDeCarros().forEach((carro: Carro) =>{
    if(carro['modelo'] === pessoa.dizerCarroPreferido()){
        pessoa.comprarCarro(carro);
    }
});

console.log('Pessoa:', pessoa.dizerCarroQueTem());
