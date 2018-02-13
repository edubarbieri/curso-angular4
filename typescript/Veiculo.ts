export default class Veiculo{
    protected modelo: string;
    protected velocidade: number = 0;

    public acelar(): void {
        this.velocidade += 10;
    }

    public parar(): void {
        this.velocidade = 10;
    }

    public velocidadeAtual(): number {
        return this.velocidade;
    }
}