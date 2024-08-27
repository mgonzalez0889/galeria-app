import {Component, inject, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, TemplateRef} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, combineLatest, delay, filter, finalize, map, Observable, startWith, tap} from "rxjs";
import {InterfaceGaleria} from "../../../interfaces/interface-galeria";
import {GaleriaService} from "../../../services/galeria.service";
import {AsyncPipe, NgForOf, NgIf, SlicePipe} from "@angular/common";
import {ModalGaleriaComponent} from "../modal-galeria/modal-galeria.component";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NgxPaginationModule} from "ngx-pagination";

@Component({
  selector: 'app-list-galeria',
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe,
    NgForOf,
    SlicePipe,
    ModalGaleriaComponent,
    NgxPaginationModule
  ],
  templateUrl: './list-galeria.component.html',
  styleUrl: './list-galeria.component.scss'
})
export class ListGaleriaComponent implements  OnInit, OnDestroy, OnChanges{
  private modalService = inject(NgbModal);
  closeResult = '';
  public itemSelected!: InterfaceGaleria
  loading = false;

  @Input() data: InterfaceGaleria[] = [];
  @Input() searchTerm: string = '';
  filteredData: InterfaceGaleria[] = [];

  ngOnInit(): void {}

  filterData() {
    this.loading = true;
    const lowerCaseSearchTerm = this.searchTerm.toLowerCase();
    this.filteredData = this.data.filter((item) => {
      this.loading = true;
        return item.title.toLowerCase().includes(lowerCaseSearchTerm)
      }
    );
    setTimeout(() => {
      this.loading = false;
    }, 1000)
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

  ngOnDestroy() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] || changes['searchTerm']) {
      this.filterData();
    }
  }


}
