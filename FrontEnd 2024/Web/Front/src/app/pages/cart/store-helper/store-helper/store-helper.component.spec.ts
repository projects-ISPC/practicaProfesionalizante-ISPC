import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { StoreHelperComponent } from './store-helper.component';

describe('StoreHelperComponent', () => {
  let component: StoreHelperComponent;
  let fixture: ComponentFixture<StoreHelperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreHelperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

@Component({
  selector: 'app-store-helper',
  templateUrl: './store-helper.component.html',
})
export class StoreHelperComponent {
  constructor(public activeModal: NgbActiveModal) {}

  closeModal() {
    this.activeModal.close();
  }
}