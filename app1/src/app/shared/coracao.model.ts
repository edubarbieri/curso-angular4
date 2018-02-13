export default class Coracao {
    constructor(
        public cheio: boolean,
        public urlCheio: string = '/assets/coracao_cheio.png',
        public urlVazio: string = '/assets/coracao_vazio.png'
    ) {
    }

    exibeCoracao(): string {
        if (this.cheio) {
            return this.urlCheio;
        }
        return this.urlVazio;
    }
}
