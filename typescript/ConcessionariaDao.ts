import DaoInterface from "./DaoInterface";
import Concessionaria from './Concessionaria';

export default class ConcessionariaDao implements DaoInterface<Concessionaria>{
    nomeTabela: string = 'CONCESSIONARIA';
    inserir(object: Concessionaria): boolean {
        //TODO insert
        console.log('inserir');
        return true;
    }
    atualizar(object: Concessionaria): boolean {
        console.log('atualizar');
        return true;
    }
    remove(id: number):Concessionaria {
        console.log('remove');
        return new Concessionaria('', []);
    }
    selecionar(id: number): Concessionaria{
        console.log('selecionar');
        return new Concessionaria('', []);
    }
    selectionarTodos(): [Concessionaria] {
        console.log('selectionarTodos');
        return [new Concessionaria('', [])];
    }
    
}