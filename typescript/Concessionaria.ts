import Carro from './Carro';
import ConcessionariaInterface from './ConcessionariaInterface';
export default class Concessionaria implements ConcessionariaInterface {
    private endereco: string;
    private listaDeCarros: Carro[];

    constructor(endereco: string, listaCarros: Carro[]) {
        this.endereco = endereco;
        this.listaDeCarros = listaCarros;
    }

    public fornecerEndereco(): string {
        return this.endereco;
    }

    public mostrarListaDeCarros(): Carro[] {
        return this.listaDeCarros;
    }

    public fornecerHorariosDeFuncionamento() {
        return "De segunda a sexta 8:30 à 12:00, 13:00 às 18:18"
    }
}