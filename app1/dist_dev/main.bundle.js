webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "p{\n    font-size: 20px;\n    color: blue;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-topo></app-topo>\n<div *ngIf=\"jogoEmAndamento; else fimDeJogo\">\n  <app-painel (encerrarJogo)=\"encerrarJogo($event)\"></app-painel>\n</div>\n<ng-template #fimDeJogo>\n  <div *ngIf=\"tipoEcerramento === 'derrota'; else fimDeJogoVitoria\" class=\"container\" style=\"margin-top: 10px;\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <h3 style=\"color: red;\">Fim de jogo, infezlimente você perdeu :S</h3>\n        <button class=\"btn btn-primary\" (click)=\"resetJogo()\">Jogar novamente</button>\n      </div>\n    </div>\n  </div>\n</ng-template>\n\n<ng-template #fimDeJogoVitoria>\n  <div class=\"container\" style=\"margin-top: 10px;\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <h3 style=\"color: green\">Fim de jogo, você ganhou :-D</h3>\n        <button class=\"btn btn-primary\" (click)=\"resetJogo()\">Jogar novamente</button>\n      </div>\n    </div>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.jogoEmAndamento = true;
    }
    AppComponent.prototype.encerrarJogo = function (tipo) {
        this.jogoEmAndamento = false;
        this.tipoEcerramento = tipo;
    };
    AppComponent.prototype.resetJogo = function () {
        this.jogoEmAndamento = true;
        this.tipoEcerramento = undefined;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__topo_topo_component__ = __webpack_require__("../../../../../src/app/topo/topo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__painel_painel_component__ = __webpack_require__("../../../../../src/app/painel/painel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tentativas_tentativas_component__ = __webpack_require__("../../../../../src/app/tentativas/tentativas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__progresso_progresso_component__ = __webpack_require__("../../../../../src/app/progresso/progresso.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__topo_topo_component__["a" /* TopoComponent */],
                __WEBPACK_IMPORTED_MODULE_4__painel_painel_component__["a" /* PainelComponent */],
                __WEBPACK_IMPORTED_MODULE_5__tentativas_tentativas_component__["a" /* TentativasComponent */],
                __WEBPACK_IMPORTED_MODULE_6__progresso_progresso_component__["a" /* ProgressoComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/mock/frases.mock.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FRASES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_frase_model__ = __webpack_require__("../../../../../src/app/shared/frase.model.ts");

var FRASES = [
    new __WEBPACK_IMPORTED_MODULE_0__shared_frase_model__["a" /* default */]('How are you?', 'Como vai voce?'),
    { fraseEn: 'I like to learn', frasePtBr: 'Eu gosto de aprender' },
    { fraseEn: 'I watch tv', frasePtBr: 'Eu assisto tv' },
    { fraseEn: 'I eat bread', frasePtBr: 'Eu como pão' }
];


/***/ }),

/***/ "../../../../../src/app/painel/painel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".jumbotron{\n    margin-top: 20px;\n    padding-top: 30px;\n    padding-bottom: 30px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/painel/painel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"jumbotron\">\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        <app-progresso [progresso]=\"progresso\"></app-progresso>\n      </div>\n      <div class=\"col-sm-6\">\n        <div class=\"d-flex justify-content-end\">\n          <app-tentativas [tentativas]=\"tentativas\"></app-tentativas>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col\">\n        <h6>{{instrucao}}</h6>\n        <p>{{rodadaFrase.fraseEn}}</p>\n        <div class=\"form-group\">\n          <textarea class=\"form-control\" rows=\"3\" (input)=\"atualizaResposta($event)\" [value]=\"resposta\"></textarea>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col\">\n        <div class=\"d-flex justify-content-end\">\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"verificarResposta()\">Verificar</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/painel/painel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PainelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_frases_mock__ = __webpack_require__("../../../../../src/app/mock/frases.mock.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PainelComponent = /** @class */ (function () {
    function PainelComponent() {
        this.frases = __WEBPACK_IMPORTED_MODULE_1__mock_frases_mock__["a" /* FRASES */];
        this.instrucao = 'Traduza a frase:';
        this.resposta = '';
        this.rodada = 0;
        this.progresso = 0;
        this.tentativas = 3;
        this.encerrarJogo = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.atualizaRodada();
    }
    PainelComponent.prototype.ngOnInit = function () {
    };
    PainelComponent.prototype.ngOnDestroy = function () {
        console.log("Componente painel foi destruido");
    };
    PainelComponent.prototype.atualizaResposta = function (event) {
        this.resposta = event.target.value;
    };
    PainelComponent.prototype.nextFrase = function () {
        if (this.rodada + 1 < this.frases.length) {
            this.rodada++;
            this.atualizaRodada();
            this.progresso = (this.rodada * 100) / this.frases.length;
        }
        else {
            this.progresso = 100;
            alert('Conclui com sucesso as traduções!');
            this.reset('vitoria');
        }
    };
    PainelComponent.prototype.atualizaRodada = function () {
        this.rodadaFrase = this.frases[this.rodada];
    };
    PainelComponent.prototype.verificarResposta = function () {
        if (this.resposta && this.rodadaFrase.frasePtBr.toLocaleLowerCase() === this.resposta.toLocaleLowerCase()) {
            alert('Tradução esta correta');
            this.nextFrase();
            this.resposta = '';
        }
        else {
            alert('Resposta errada!');
            this.tentativas--;
            if (this.tentativas === -1) {
                alert('Voce perdeu todas as tentativas');
                this.reset('derrota');
            }
        }
    };
    PainelComponent.prototype.reset = function (tipo) {
        this.encerrarJogo.emit(tipo);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], PainelComponent.prototype, "encerrarJogo", void 0);
    PainelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-painel',
            template: __webpack_require__("../../../../../src/app/painel/painel.component.html"),
            styles: [__webpack_require__("../../../../../src/app/painel/painel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PainelComponent);
    return PainelComponent;
}());



/***/ }),

/***/ "../../../../../src/app/progresso/progresso.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".progress{\n    background: #ffff;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/progresso/progresso.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"progress\">\n  <div class=\"progress-bar progress-bar-striped  bg-success w-{{progresso}}\"></div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/progresso/progresso.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProgressoComponent = /** @class */ (function () {
    function ProgressoComponent() {
    }
    ProgressoComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Number)
    ], ProgressoComponent.prototype, "progresso", void 0);
    ProgressoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-progresso',
            template: __webpack_require__("../../../../../src/app/progresso/progresso.component.html"),
            styles: [__webpack_require__("../../../../../src/app/progresso/progresso.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProgressoComponent);
    return ProgressoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/coracao.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var Coracao = /** @class */ (function () {
    function Coracao(cheio, urlCheio, urlVazio) {
        if (urlCheio === void 0) { urlCheio = '/assets/coracao_cheio.png'; }
        if (urlVazio === void 0) { urlVazio = '/assets/coracao_vazio.png'; }
        this.cheio = cheio;
        this.urlCheio = urlCheio;
        this.urlVazio = urlVazio;
    }
    Coracao.prototype.exibeCoracao = function () {
        if (this.cheio) {
            return this.urlCheio;
        }
        return this.urlVazio;
    };
    return Coracao;
}());
/* harmony default export */ __webpack_exports__["a"] = (Coracao);


/***/ }),

/***/ "../../../../../src/app/shared/frase.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var Frase = /** @class */ (function () {
    function Frase(fraseEn, frasePtBr) {
        this.fraseEn = fraseEn;
        this.frasePtBr = frasePtBr;
    }
    return Frase;
}());
/* harmony default export */ __webpack_exports__["a"] = (Frase);


/***/ }),

/***/ "../../../../../src/app/tentativas/tentativas.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tentativas/tentativas.component.html":
/***/ (function(module, exports) {

module.exports = "<img *ngFor=\"let coracao of coracoes\" [src]=\"coracao.exibeCoracao()\" alt=\"\">\n"

/***/ }),

/***/ "../../../../../src/app/tentativas/tentativas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TentativasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_coracao_model__ = __webpack_require__("../../../../../src/app/shared/coracao.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TentativasComponent = /** @class */ (function () {
    function TentativasComponent() {
        this.coracoes = [
            new __WEBPACK_IMPORTED_MODULE_1__shared_coracao_model__["a" /* default */](false),
            new __WEBPACK_IMPORTED_MODULE_1__shared_coracao_model__["a" /* default */](false),
            new __WEBPACK_IMPORTED_MODULE_1__shared_coracao_model__["a" /* default */](false)
        ];
        this.tentativas = 0;
    }
    TentativasComponent.prototype.ngOnInit = function () {
        this.updateCorracoes();
    };
    TentativasComponent.prototype.ngOnChanges = function (changes) {
        if (changes['tentativas']) {
            this.updateCorracoes();
        }
    };
    TentativasComponent.prototype.updateCorracoes = function () {
        this.coracoes.forEach(function (value) {
            value.cheio = false;
        });
        for (var i = 1; i <= this.tentativas; i++) {
            this.coracoes[this.coracoes.length - i].cheio = true;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], TentativasComponent.prototype, "tentativas", void 0);
    TentativasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-tentativas',
            template: __webpack_require__("../../../../../src/app/tentativas/tentativas.component.html"),
            styles: [__webpack_require__("../../../../../src/app/tentativas/tentativas.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TentativasComponent);
    return TentativasComponent;
}());



/***/ }),

/***/ "../../../../../src/app/topo/topo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/topo/topo.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-primary\">\n  <span class=\"navbar-brand mb-0 h1\">{{title}}</span>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/topo/topo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TopoComponent = /** @class */ (function () {
    function TopoComponent() {
        this.title = 'Aprendendo Inglês';
    }
    TopoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-topo',
            template: __webpack_require__("../../../../../src/app/topo/topo.component.html"),
            styles: [__webpack_require__("../../../../../src/app/topo/topo.component.css")]
        })
    ], TopoComponent);
    return TopoComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map