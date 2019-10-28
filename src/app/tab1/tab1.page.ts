import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public works: Array<Work>;

  constructor() {
    this.works = new Array<Work>();
    this.works.push(new Work('Karl Dobermann', 'Trabalho sobre a clorofila em arvores domesticas', '1'));
    this.works.push(new Work('Friedrich Nietszche', 'Assim falava Zaratustra', '2'));
    this.works.push(new Work('Franz Kafta', 'O Processo', '3'));
    this.works.push(new Work('Martin Fowler', 'Padrões arquiteturais de software', '4'));
    this.works.push(new Work('Max Cavalera', 'A hora e a vez do cabelo crescer', '5'));
    this.works.push(new Work('Kanemann', 'Não foi Falta', '6'));
  }

}

class Work{
  public author: string;
  public title: string;
  public code: string;

  constructor(author: string, title: string, code: string){
    this.author = author;
    this.title = title;
    this.code = code;
  }
}