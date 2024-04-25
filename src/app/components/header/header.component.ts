import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  
  usuario : string = "Estudiante"

  tiempoConexion : string = ''
  intervalo = 10

  actualizar(segundos : number){
    this.tiempoConexion = 'Conectado' + segundos + 'segundos'
  }


}
