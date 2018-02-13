//import ConcessionariaDao from './ConcessionariaDao';
import Concessionaria from './Concessionaria';
import { Dao } from './Dao';

//let dao: ConcessionariaDao = new ConcessionariaDao();
let concessionaria: Concessionaria = new Concessionaria('Passo Fundo', []);

let dao: Dao<Concessionaria> = new Dao();

dao.inserir(concessionaria);