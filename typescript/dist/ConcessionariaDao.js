"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var ConcessionariaDao = /** @class */ (function () {
    function ConcessionariaDao() {
        this.nomeTabela = 'CONCESSIONARIA';
    }
    ConcessionariaDao.prototype.inserir = function (object) {
        //TODO insert
        console.log('inserir');
        return true;
    };
    ConcessionariaDao.prototype.atualizar = function (object) {
        console.log('atualizar');
        return true;
    };
    ConcessionariaDao.prototype.remove = function (id) {
        console.log('remove');
        return new Concessionaria_1.default('', []);
    };
    ConcessionariaDao.prototype.selecionar = function (id) {
        console.log('selecionar');
        return new Concessionaria_1.default('', []);
    };
    ConcessionariaDao.prototype.selectionarTodos = function () {
        console.log('selectionarTodos');
        return [new Concessionaria_1.default('', [])];
    };
    return ConcessionariaDao;
}());
exports.default = ConcessionariaDao;
