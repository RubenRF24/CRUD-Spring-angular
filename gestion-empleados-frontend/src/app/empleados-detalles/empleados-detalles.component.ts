import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';

@Component({
  selector: 'app-empleados-detalles',
  standalone: true,
  imports: [],
  templateUrl: './empleados-detalles.component.html',
  styleUrl: './empleados-detalles.component.css'
})
export class EmpleadosDetallesComponent {

  id: number;
  empleado: Empleado;

  constructor(private route: ActivatedRoute, private empleadoServicio: EmpleadoService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.empleado = new Empleado();
    this.empleadoServicio.obtenerEmpleadoPorId(this.id).subscribe(dato => {
      this.empleado = dato;
      Swal.fire( 'Detalles del empleado '+this.empleado.nombre);
    });
  }
}
