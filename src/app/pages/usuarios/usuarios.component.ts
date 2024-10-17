import { Component, OnInit } from '@angular/core';
import { DatosService } from '../../services/datos.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent implements OnInit{
  users: any;
  
  constructor(private datosServicio:DatosService){
    
  }

  ngOnInit(): void {
    this.datosServicio.getUsers().subscribe((request: any) => {
      this.users = request.data;
    });
  }


}
