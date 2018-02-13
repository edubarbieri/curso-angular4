import DaoInterface from "./DaoInterface";


export class Dao<T> implements DaoInterface<T>{
    nomeTabela: string;
    inserir(object: T): boolean {
        //TODO insert
        console.log('inserir');
        return true;
    }
    atualizar(object: T): boolean {
        console.log('atualizar');
        return true;
    }
    remove(id: number):T {
        console.log('remove');
        return Object();
    }
    selecionar(id: number): T{
        console.log('selecionar');
        return Object();
    }
    selectionarTodos(): [T] {
        console.log('selectionarTodos');
        return [Object()];
    }
    
}