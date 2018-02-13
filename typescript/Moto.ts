import Veiculo from "./Veiculo";

class Moto extends Veiculo{
    constructor(modelo: string, velocidade: number) {
        super();
        this.modelo = modelo;
        this.velocidade = velocidade;
    }

    public acelar(){
        this.velocidade += 20;
    }
}

export default Moto;