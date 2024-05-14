import { Component } from '@angular/core';
import { MensajesService } from '../../services/mensajes.service';
import { Message } from '../../Domain/message';
import { FormsModule } from '@angular/forms';
import { getDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-mensajes',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './mensajes.component.html',
  styleUrl: './mensajes.component.scss'
})
export class MensajesComponent {

  mensaje: Message = new Message()
  message : any

  constructor(private messagesService : MensajesService){
  }

  ngOnInit(){
    this.messagesService.getMessage().then(data => {

      this.message = data.docs.map((doc:any) => {
        console.log(doc.id)
        console.log(doc.data())
        return {
          id: doc.id,
          ...doc.data()
        }
      })
      
      console.log('msgs', this.mensaje)
    })
  }

  guardar(){
    this.messagesService.addMessage(this.mensaje)
    console.log('Mensaje Enviado');
  }

}
