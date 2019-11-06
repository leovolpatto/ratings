import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RatingPage } from './rating/rating.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'trabalhos.page.html',
  styleUrls: ['trabalhos.page.scss']
})
export class TrabalhosPage {

  public works: Array<Work>;

  constructor(public navCtrl: NavController) {
    this.works = new Array<Work>();
    this.works.push(new Work('Karl Dobermann', 'Trabalho sobre a clorofila em arvores domesticas', '1'));
    this.works.push(new Work('Friedrich Nietszche', 'Assim falava Zaratustra', '2'));
    this.works.push(new Work('Franz Kafta', 'O Processo', '3'));
    this.works.push(new Work('Martin Fowler', 'Padrões arquiteturais de software', '4'));
    this.works.push(new Work('Max Cavalera', 'A hora e a vez do cabelo crescer', '5'));
    this.works.push(new Work('Kanemann', 'Não foi Falta', '6'));
  }

  private rateWork(work: Work){
    //this.navCtrl.push(new RatingPage());
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