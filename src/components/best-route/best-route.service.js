"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var BestRouteService = (function () {
    function BestRouteService() {
    }
    BestRouteService.prototype.salvar = function (perfil) {
        // perfil.id = Math.floor(Math.random() * 100) + 5;
        // perfil.descricao = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tempus, quam at faucibus tempus, metus turpis eleifend enim, in fringilla felis dui non dolor.";
        // perfil.situacao = { "id": 1, "descricao": "Ativo" };
        //
        // this.perfils.push(perfil);
    };
    BestRouteService.prototype.getPerfils = function () {
        //return this.perfils;
        return null;
    };
    BestRouteService.prototype.getPerfil = function (id) {
        //return this.perfils.filter(perfil => perfil.id == id)[0];
        return null;
    };
    BestRouteService.prototype.isAtivo = function (perfil) {
        //return perfil.situacao.id === 1;
        return false;
    };
    BestRouteService.prototype.isInativo = function (perfil) {
        //return perfil.situacao.id === 2;
        return false;
    };
    return BestRouteService;
}());
BestRouteService = __decorate([
    core_1.Injectable()
], BestRouteService);
exports.BestRouteService = BestRouteService;
