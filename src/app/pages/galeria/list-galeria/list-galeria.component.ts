import {Component, inject, Input, OnInit, TemplateRef} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, combineLatest, delay, filter, finalize, map, Observable, startWith, tap} from "rxjs";
import {InterfaceGaleria} from "../../../interfaces/interface-galeria";
import {GaleriaService} from "../../../services/galeria.service";
import {AsyncPipe, NgForOf, NgIf, SlicePipe} from "@angular/common";
import {ModalGaleriaComponent} from "../modal-galeria/modal-galeria.component";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-list-galeria',
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe,
    NgForOf,
    SlicePipe,
    ModalGaleriaComponent
  ],
  templateUrl: './list-galeria.component.html',
  styleUrl: './list-galeria.component.scss'
})
export class ListGaleriaComponent implements  OnInit{
  private modalService = inject(NgbModal);
  closeResult = '';
  public itemSelected!: InterfaceGaleria
  loading = false;

  @Input() data$: Observable<InterfaceGaleria[]> = new Observable();
  filteredData$!: Observable<InterfaceGaleria[]>;
  private searchTermSubject = new BehaviorSubject<string>('');

  @Input() set searchTerm(value: string) {
    this.searchTermSubject.next(value.toLowerCase());
  }

  ngOnInit(): void {
    this.filteredData$ = combineLatest([this.data$, this.searchTermSubject.pipe(startWith(''))])
      .pipe(
        tap(() => this.loading = true),
        map(([galerias, searchTerm]) => {
          if (!searchTerm) {
            setTimeout(() => {
              this.loading = false
            }, 1000)
            return galerias;
          }

          const filteredGalerias = galerias.filter(galeria =>
            galeria.title.toLowerCase().includes(searchTerm)
          );
          setTimeout(() => {
            this.loading = false;
          }, 1000)

          return filteredGalerias;
        })
      );
  }



  open(content: TemplateRef<any>, item: InterfaceGaleria) {
    this.itemSelected = item;
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      },
    );
  }

  private getDismissReason(reason: any): string {
    switch (reason) {
      case ModalDismissReasons.ESC:
        return 'by pressing ESC';
      case ModalDismissReasons.BACKDROP_CLICK:
        return 'by clicking on a backdrop';
      default:
        return `with: ${reason}`;
    }
  }


}
