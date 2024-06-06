import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-store-helper',
  templateUrl: './store-helper.component.html',
  styleUrls: ['./store-helper.component.css'],
})
export class StoreHelperComponent {
  constructor(public activeModal: NgbActiveModal) {}

  closeModal() {
    this.activeModal.close();
  }
}