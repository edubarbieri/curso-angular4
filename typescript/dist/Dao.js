"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dao = /** @class */ (function () {
    function Dao() {
    }
    Dao.prototype.inserir = function (object) {
        //TODO insert
        console.log('inserir');
        return true;
    };
    Dao.prototype.atualizar = function (object) {
        console.log('atualizar');
        return true;
    };
    Dao.prototype.remove = function (id) {
        console.log('remove');
        return Object();
    };
    Dao.prototype.selecionar = function (id) {
        console.log('selecionar');
        return Object();
    };
    Dao.prototype.selectionarTodos = function () {
        console.log('selectionarTodos');
        return [Object()];
    };
    return Dao;
}());
exports.Dao = Dao;
