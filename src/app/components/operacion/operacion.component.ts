import { Component, Input } from '@angular/core';
import { ContactosService } from '../../services/contactos.service';
import { StringListService } from '../../services/string-list.service';

@Component({
  selector: 'app-operacion',
  standalone: true,
  imports: [],
  templateUrl: './operacion.component.html',
  styleUrl: './operacion.component.scss'
})
export class OperacionComponent {
  messages: string[] = []

  resultado: number = 0;
  @Input() operacion: string=""; 
  keys: string[] = ["0","1","2","3","4","5","6","7","8","9" ];  
  screen: string = "";
  cifras: string[] = [];

  
  constructor(private stringlistService: StringListService){

  }

  

  ngOnInit(){
    this.messages = this.stringlistService.get()
  }
  
  writeNumber(key: string){
    if ( key == this.operacion && (this.screen.includes(this.operacion) || this.screen.length == 0)){
      return;
    }
    else{
      this.screen += key; 
    }     
  }

  delete(event: any){
    if(this.screen.length > 0){
      this.screen = this.screen.substring(0, this.screen.length - 1);
    }
  }

  operar(event: any){
    this.cifras[0] =this.screen.split(this.operacion)[0];
    this.cifras[1] =this.screen.split(this.operacion)[1];
    switch(this.operacion){
      case "+":{
        this.resultado = parseInt(this.cifras[0]) + parseInt(this.cifras[1]);
        break;
      }
      case "-":{
        this.resultado = parseInt(this.cifras[0]) - parseInt(this.cifras[1]);
        break;
      }
      case "*":{
        this.resultado = parseInt(this.cifras[0]) * parseInt(this.cifras[1]);
        break;
      }
      case "/":{
        this.resultado = parseInt(this.cifras[0]) / parseInt(this.cifras[1]);
        break;
      }
    }
    
    this.stringlistService.add(this.cifras[0] + this.operacion + this.cifras[1]+ "=" + this.resultado.toString())
  }

  limpiar(){
    this.stringlistService.clear()
    this.ngOnInit()
  }

}
