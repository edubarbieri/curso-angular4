import Veiculo from "./Veiculo";

export default class Carro extends Veiculo {
    private numeroDePortas: number;

    constructor(modelo: string, velocidade: number) {
        super();
        this.modelo = modelo;
        this.velocidade = velocidade;
    }

}

export let qualquerCoisa: string = 'Qualquer coisa';