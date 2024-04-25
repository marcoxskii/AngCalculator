import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sesion',
  standalone: true,
  imports: [],
  templateUrl: './sesion.component.html',
  styleUrl: './sesion.component.scss'
})
export class SesionComponent {
  segundos : number = 0;
  @Output() tiempo = new EventEmitter<number>()

  rgOnInit(){
    console.log("iniciando SesionComponent")
    setInterval(() => {
      this.segundos++
      console.log(this.segundos)
      this.tiempo.emit(this.segundos)
    }, 1000);
  }

  reset(){
    this.segundos = 0
    this.tiempo.emit(this.segundos)
  }

}
