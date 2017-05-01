import { Injectable } from '@angular/core';

@Injectable()
export class BestRouteService {

  constructor() {
  }

  public salvar(perfil: any) {
    // perfil.id = Math.floor(Math.random() * 100) + 5;
    // perfil.descricao = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tempus, quam at faucibus tempus, metus turpis eleifend enim, in fringilla felis dui non dolor.";
    // perfil.situacao = { "id": 1, "descricao": "Ativo" };
    //
    // this.perfils.push(perfil);
  }

  public getPerfils(): any[] {
    //return this.perfils;
    return null;
  }

  public getPerfil(id: any): any {
    //return this.perfils.filter(perfil => perfil.id == id)[0];
    return null;
  }

  public isAtivo(perfil: any): boolean {
    //return perfil.situacao.id === 1;
    return false;
  }

  public isInativo(perfil: any): boolean {
    //return perfil.situacao.id === 2;
    return false;
  }

}
