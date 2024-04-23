import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})

export class BodyComponent {
  cifra1: number = 0;
  cifra2: number = 0;
  resultado: number = 0;

  onCifra1(event: any) {
    this.cifra1 = +event.target.value;
  }

  onCifra2(event: any) {
    this.cifra2 = +event.target.value; //el + le conviert de cadena a num
  }

  sumar() {
    this.resultado = this.cifra1 + this.cifra2;
  }

  limpiar(){

  }

}
