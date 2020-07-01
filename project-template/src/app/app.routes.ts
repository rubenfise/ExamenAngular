import { Routes, RouterModule } from '@angular/router';
import { TablaComponent } from './tabla/tabla.component';
import { CrearComponent } from './crear/crear.component';

const routes: Routes = [
    { path: 'empleados', component: TablaComponent },
    { path: 'agregarEmpleado', component: CrearComponent },
    { path: '**', redirectTo: 'empleados', pathMatch: 'full' }
];

export const APP_ROUTES = RouterModule.forRoot( routes, { useHash: true } );