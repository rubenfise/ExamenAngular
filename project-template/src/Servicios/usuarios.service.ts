import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private URL_SERVICIOS = environment.urlServicios;

  constructor( private http: HttpClient ) { }

  getUsers() {
    const url = `${ this.URL_SERVICIOS }/readAllData`;
    return this.http.get( url );
  }

  addUser( usuario: any ) {
    const url = `${ this.URL_SERVICIOS }/createData`;
    return this.http.post( url, usuario )
    .pipe(
      map( ( resp: any ) => {
        const alert = {
          icon: 'success',
          title: 'Empleado creado.'
        };
        return true;
      })
    );
  }

  getUser( id: string ) {
    const url = `${ this.URL_SERVICIOS }/readData`;
    const paramId = new HttpParams().set('id', id );
    return this.http.get( url, { params: paramId } )
    .pipe(
    );
  }

  deletUser( id: string ) {
    const url = `${ this.URL_SERVICIOS }/deleteData`;
    return this.http.delete( url, { params: { id } } )
    .pipe(
      map( ( resp: any ) => {
        const alert = {
          icon: 'success',
          title: 'Empleado eliminado.'
        };
        return true;
      })
    );
  }

  updateUser( user: any ) {
    const url = `${ this.URL_SERVICIOS }/updateData`;
    return this.http.put( url, user )
    .pipe(
      map( ( resp: any ) => {
        const alert = {
          icon: 'success',
          title: 'Empleado actualizado.'
        };
        return true;
      })
    )
  }

}
