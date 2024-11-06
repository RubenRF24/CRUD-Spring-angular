import { Routes } from '@angular/router';
import { ActualizarEmpleadoComponent } from './actualizar-empleado/actualizar-empleado.component';
import { EmpleadosDetallesComponent } from './empleados-detalles/empleados-detalles.component';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import { RegistrarEmpleadoComponent } from './registrar-empleado/registrar-empleado.component';

export const routes: Routes = [
    { path: 'empleados', component: ListaEmpleadosComponent },
    { path: '', redirectTo: 'empleados', pathMatch: 'full' },
    { path: 'registrar-empleado', component: RegistrarEmpleadoComponent },
    { path: 'actualizar-empleado/:id', component: ActualizarEmpleadoComponent },
    { path: 'empleado-detalles/:id', component: EmpleadosDetallesComponent }
];
