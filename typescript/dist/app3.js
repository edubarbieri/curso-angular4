"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = __importDefault(require("./Carro"));
var Moto_1 = __importDefault(require("./Moto"));
var carro = new Carro_1.default('Celta', 10);
carro.acelar();
carro.acelar();
var moto = new Moto_1.default('CG Titan', 10);
moto.acelar();
moto.acelar();
console.log(carro);
console.log(moto);
