import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';

@Component({
  selector: 'app-registrar-empleado',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './registrar-empleado.component.html',
  styleUrl: './registrar-empleado.component.css'
})
export class RegistrarEmpleadoComponent {


  empleado: Empleado = new Empleado();
  constructor(private empleadoServicio: EmpleadoService, private router:Router) { }
  
  ngOnInit() : void {
  }

  guardarEmpleado() {
    this.empleadoServicio.registrarEmpleado(this.empleado).subscribe(dato => {
      console.log(dato);
      this.irALaListaDeEmpleados();
    }, error => console.log(error))
  }

  irALaListaDeEmpleados() {
    this.router.navigate(['/empleados']);  
  }
  
  onSubmit() {
    this.guardarEmpleado();
  }

}
