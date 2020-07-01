import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { TabsComponent } from './tabs/tabs.component';
import { TablaComponent } from './tabla/tabla.component';
import { CrearComponent } from './crear/crear.component';
import { UsuariosService } from 'src/Servicios/usuarios.service';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    TablaComponent,
    CrearComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    MatTabsModule,
    HttpClientModule
  ],
  providers: [UsuariosService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
