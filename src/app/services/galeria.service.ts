import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {InterfaceGaleria} from "../interfaces/interface-galeria";

@Injectable({
  providedIn: 'root'
})
export class GaleriaService {
  constructor(private _htpp: HttpClient) {}

  private URL = 'https://jsonplaceholder.typicode.com/'


  listadoGaleria (): Observable<InterfaceGaleria[]> {
    return this._htpp.get<InterfaceGaleria[]>(this.URL + 'photos?albumId=1');
  }
}
