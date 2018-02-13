import Carro from './Carro';
import Moto from './Moto';

let carro = new Carro('Celta', 10);
carro.acelar()
carro.acelar()

let moto = new Moto('CG Titan', 10);

moto.acelar();
moto.acelar();

console.log(carro);
console.log(moto)