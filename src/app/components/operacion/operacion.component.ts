import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-operacion',
  standalone: true,
  imports: [],
  templateUrl: './operacion.component.html',
  styleUrl: './operacion.component.scss'
})
export class OperacionComponent {
  cifra1: number = 0;
  cifra2: number = 0;
  resultado: number = 0;
  @Input() operacion: string=""; 

  onCifra1(event: any) {
    this.cifra1 = +event.target.value;
  }

  onCifra2(event: any) {
    this.cifra2 = +event.target.value; //el + le conviert de cadena a num
  }

  operar(event: any){
    switch(this.operacion){
      case "Sumar":{
        this.resultado = this.cifra1 + this.cifra2;
        break;
      }
      case "Restar":{
        this.resultado = this.cifra1 - this.cifra2;
        break;
      }
      case "Multiplicar":{
        this.resultado = this.cifra1 * this.cifra2;
        break;
      }
      case "Dividir":{
        this.resultado = this.cifra1 / this.cifra2;
        break;
      }

    }
  }


}
