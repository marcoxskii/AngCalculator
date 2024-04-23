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

  restar() {
    this.resultado = this.cifra1 - this.cifra2;
  }
  
  multiplicar() {
    this.resultado = this.cifra1 * this.cifra2;
  }
  
  dividir() {
    this.resultado = this.cifra1 / this.cifra2;
  }
  
  limpiar(){
    this.cifra1 = 0;
    this.cifra2 = 0;
    this.resultado = 0;

    const cifra1Input = document.querySelector('input[placeholder="Cifra 1"]') as HTMLInputElement;
    const cifra2Input = document.querySelector('input[placeholder="Cifra 2"]') as HTMLInputElement;
    cifra1Input.value = '';
    cifra2Input.value = '';
  }
  
  
  
}
