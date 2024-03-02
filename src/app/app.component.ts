import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dadoI = '../assets/img/dice1.png';
  dadoD = '../assets/img/dice4.png';
  numero1: number = 1;
  numero2: number = 4;

  tirarDados() {
    this.numero1 = Math.round(Math.random() * 5) + 1;
    this.numero2 = Math.round(Math.random() * 5) + 1;
    this.dadoI = `../assets/img/dice${this.numero1}.png`;
    this.dadoD = `../assets/img/dice${this.numero2}.png`;
  }



}
