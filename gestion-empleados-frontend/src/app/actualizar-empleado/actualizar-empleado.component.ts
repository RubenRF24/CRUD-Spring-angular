import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, of, tap } from 'rxjs';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';

@Component({
  selector: 'app-actualizar-empleado',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './actualizar-empleado.component.html',
  styleUrl: './actualizar-empleado.component.css'
})
export class ActualizarEmpleadoComponent {

  id: number;
  empleado: Empleado = new Empleado();

  constructor(private empleadoServicio: EmpleadoService, private router: Router, private route: ActivatedRoute) { }
  
  ngOnInit(): void{
    this.id = this.route.snapshot.params['id'];
    this.empleadoServicio.obtenerEmpleadoPorId(this.id).pipe(tap
      (dato => { //realiza algun efecto secundario
      this.empleado = dato;
    }),
      catchError(error => {
        console.log(error);
        return of(null); //Retorna un observable vacio en caso de error
      })
    ).subscribe(); 
  }

  irALaListaDeEmpleados(){
    this.router.navigate(['/empleados']);
  }

  onSubmit(): void {
    if (this.empleado) {
      this.empleadoServicio.actualizarEmpleado(this.id, this.empleado).pipe(tap(dato => {
        this.irALaListaDeEmpleados(); //redirige a la lista de empleados
      }),
        catchError(error => {
          console.log('Error al actualizar empleado: ', error);
          return of(null); //retorna un observable con un valor nulo
        })
      ).subscribe(); //Realiza la suscripcion al observable
    }
  }


}
