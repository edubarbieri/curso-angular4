export default interface DaoInterface<T>{
    nomeTabela: string;
    inserir(object : T): boolean;
    atualizar(object : T): boolean;
    remove(id : number): T;
    selecionar(id: number): T;
    selectionarTodos(): [T];

}