import { Component } from '@angular/core';
import {ListGaleriaComponent} from "../list-galeria/list-galeria.component";

@Component({
  selector: 'app-smart-galeria',
  standalone: true,
  imports: [
    ListGaleriaComponent
  ],
  templateUrl: './smart-galeria.component.html',
  styleUrl: './smart-galeria.component.scss'
})
export class SmartGaleriaComponent {

}
