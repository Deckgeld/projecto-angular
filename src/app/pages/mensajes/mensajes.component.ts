import { Component, OnInit } from '@angular/core';
import { DatosService } from '../../services/datos.service'

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrl: './mensajes.component.css'
})
export class MensajesComponent implements OnInit {
  mensajes:any;
  
  constructor(private datosServicio:DatosService){
    
  }

  ngOnInit(): void {
    this.mensajes = this.datosServicio.getMensajes();
  }

  

}
